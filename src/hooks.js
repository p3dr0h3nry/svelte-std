import * as cookie from 'cookie';
import { resolveConfig } from 'vite';

// /** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    
    const {request } = event;
    const headers = request.headers;
    const cookies = cookie.parse(headers.get('cookie') || '');
    // console.log('cookies hook',cookies.name);
    // const response = await resolve(request);
    // console.log('request--------------',request,'evento------------',event);
    // console.log('getcontext',cookies,request.locals);
    event.locals.user = cookies;
    if(!cookies.session_id){
        event.locals.authenticated =false;

        
        // return {
        //     ...response,
        //     headers: {
        //             ...response.headers,
        //             // "hello": "opa",
        //         },
        //     }
        // }

        // request.locals.session_id = null;
        // return event.locals.session_id?{
        //     authenticated:false,
        //     session_id:''
        // }:
        // {}
        // return {
        //     ...event
        // };
        
        // return {
        //     authenticated: false
        // }
    }else{
        event.locals.authenticated=true;
    }
    const response = await resolve(event);

    return response;
    // const userSession = cookies.session_id;
    // request.locals= {
    //     authenticated: true,
    //     session_id:userSession
    // };
    // return resolve(request);
    // return {
    //     authenticated: true,
    //     sessao: userSession
    // }
}

// /** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event){
    const authenticated = event.locals.authenticated;
    const {routeId} = event; 
    // console.log('getSessao----------------------------------',event);
    if(!authenticated ){
        // console.log('sem autenticacao');
        return {
            // message:(routeId!='' && routeId!='auth')?'You are not logged, please Sign In':''
        }
    }else{
        // console.log('Autenticado',event.locals);
        return event.locals
    }
    // console.log(event)
    // const { request } = event
    // const headers = request.headers;
    // const cookies = cookie.parse(headers.get('cookie') || '');
    // console.log('getSession',request.locals);
    // if(!cookies.session_id){
    //     console.log('retorna false');
    //     return request.locals
        
    // }else{
    //     console.log('retorna true');
    //     return {
    //         authenticated: true,
    //         sessao: cookies.session_id
    //     }
    // }
}