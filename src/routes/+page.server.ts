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
        title: i.attributes.Title,
        slug: i.attributes.slug
       } 

    })

    let collection_photos = collection_data.data.map((i)=> {
        return {
            collection_id: i.id,
            collection_slug:i.attributes.slug,
            collection_title: i.attributes.Title,
            photos: i?.attributes?.Pages?.data?.map( (z) => {
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
