import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { strapiLogin } from '$lib/strapi';


export const load: PageServerLoad = async () => {
    //todo
}

const login: Action = async ({ cookies, request }) => {

    const data = await request.formData();
    const password = await data.get('password');
    const email = await data.get('email');

    if (typeof password !== `string` || typeof email !== 'string' || !email || !password) {
        return fail(400, {invalid: true})
    }

    const login_response = await strapiLogin(email, password);
    const login = await login_response.json();

    if (login?.error?.status === 400) {
        console.log("Failed to Login")
        return fail(400, {credentials: true})
    } 


    cookies.set('session', login?.jwt, {
        //send cookies to every page
        path: '/',
        //server side only cookies so you can't use 'document.cookie'
        httpOnly:true,
        secure: false,
        // only requests from the same site can send cookies
        sameSite: 'strict',
        // set cookies to expire after a month
        maxAge: 60,

    })

    console.log("User Logged In");
    throw redirect(302, '/');
}

export const actions: Actions = { login }

