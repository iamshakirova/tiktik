import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId:'bdabmtxd',
    dataset:'production',
    apiVersion:'2023-12-16',
    useCdn: false,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    // ignoreBrowserTokenWarning: true
});
