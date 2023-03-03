import { handle, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { strapiGetSingleCollection } from '$lib/strapi';

export const load: PageServerLoad = async ({ params, locals }) => {
    //If User is not Logged in Redirect to /login
    if (!locals.user){
        throw redirect(302, '/login')
    }
    //End
    //Get Slug Data
    const slug = params.collection;



    const res_singleCollection= await strapiGetSingleCollection(locals.user.token, slug);
    const collection_data = await res_singleCollection.json()

    console.log(collection_data?.data?.[0]);

    const collection_photos = collection_data?.data?.[0]?.attributes?.Pages?.data?.map((i) =>{
        return {
            url: i.attributes.url,
            caption: i.attributes.caption,
        }
    })




    return {
        collection_photos,
        collection_data

    };
}
