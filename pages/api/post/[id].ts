import { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";

import { postDetailQuery } from "@/utils/queries";
import { client } from "@/utils/client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const { id } = req.query;

        if (typeof id === "string") {
            const query = postDetailQuery(id)

            const data = await client.fetch(query);

            res.status(200).json(data[0])
        } else {
            res.status(400).json('Error')
        }
        
    } else if (req.method === 'PUT') {
        const { comment, userId } = req.body;
    
        const { id }: any = req.query;
    
        const data = await client
          .patch(id)
          .setIfMissing({ comments: [] })
          .insert('after', 'comments[-1]', [
            {
              comment,
              _key: uuid(),
              postedBy: { _type: 'postedBy', _ref: userId },
            },
          ])
          .commit();
    
        res.status(200).json(data);
    }else if(req.method === 'DELETE'){
      
      const {id} : any = req.query;
      const data = await client.delete(id)

      res.status(200).json(data);
    }
}
