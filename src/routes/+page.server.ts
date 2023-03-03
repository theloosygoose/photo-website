import { handle, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { strapiGetAllCollections} from '$lib/strapi';

export const load: PageServerLoad = async ({ event, locals }) => {
    if (!locals.user){
        throw redirect(302, '/login')
    }

    let res_allCollections = await strapiGetAllCollections(locals.user.token);
    let collection_data = await res_allCollections.json()

    let collection_names = collection_data.data.map((i) => {
       return {
        id: i.id,
        title: i.attributes.title,
        slug: i.attributes.handle
       } 

    })

    let collection_photos = collection_data.data.map((i)=> {
        return {
            collection_id: i.id,
            collection_slug:i.attributes.handle,
            collection_title: i.attributes.title,
            photos: i?.attributes?.photos?.data?.map((z) => {
                return{
                    url: z?.attributes?.url,
                    caption: z?.attributes?.caption,
                }
            })
        }
    })
    



    return {
        collection_names,
        collection_data,
        collection_photos
    };
}
