import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoVerified } from 'react-icons/go'
import {IUser} from '@/types'
import { NextPage } from 'next'
import useAuthStore from '@/store/authStore'

interface IProps {
  fetchAllUsers: () => void
  allUsers: IUser[]
}

const SuggestedAccounts = ({fetchAllUsers, allUsers}:IProps) => {
  return (
    <div className='xl:border-b-2 border-gray-300'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
        Suggested Accounts
      </p>
      <div>
        {allUsers.map((user:IUser, index:number) =>(
          <Link href={`/profile/${user._id}`} key={index}>
            <div className='flex gap-3 hover:bg-primary p-2 cursor-pointer'>
                <div className='w-8 h-8'>
                  <Image src={user.image} alt='user' width={30} height={30}/>
                </div>
                <div className='hidden xl:block'>
                  <p className='flex gap-1 items-center text-md font-bold lowercase'>
                    {user.userName.replace(/\s+/g,'')}{''}
                    <GoVerified className='text-blue-400'/>
                  </p>
                  <p className='capitalize'>
                    {user.userName}
                  </p>
                  
                </div>
            </div>
           
          </Link>
        ))}
      </div>

    </div>
  )
}

export default SuggestedAccounts