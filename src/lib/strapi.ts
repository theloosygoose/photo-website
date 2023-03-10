import jwt_decode from 'jwt-decode';

export const strapiLogin = async ( email:string, password:string) => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const body = {
        identifier: email,
        password: password
    }

    const strapi_response = await fetch('https://bold-fog-8666.fly.dev/api/auth/local', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })

    return strapi_response;
}

export const strapiVerify = async (strapiToken:string) => {

    let strapiUserId = jwt_decode(strapiToken).id;
    console.log(strapiUserId);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${strapiToken}`)


    const strapi_response = await fetch(`https://bold-fog-8666.fly.dev/api/users?filters[id][$eq]=${strapiUserId}`,{
        method:'GET',
        headers: headers,
    });

    return strapi_response;
}

export const strapiGetAllCollections = async(strapiToken:string) => {
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${strapiToken}`)


    const strapi_response = await fetch(`https://bold-fog-8666.fly.dev/api/collections?populate=*`,{
        method:'GET',
        headers: headers,
    });

    return strapi_response;

}

export const strapiGetSingleCollection =async (strapiToken:string, slug:string) => {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${strapiToken}`)

    const strapi_response = await fetch(`https://bold-fog-8666.fly.dev/api/collections?filters[handle][$eq]=${slug}&populate=*`,{
        method:'GET',
        headers: headers,
    });

    return strapi_response;
    
}
