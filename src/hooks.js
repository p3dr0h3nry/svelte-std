import * as cookie from 'cookie';

export const handle = async ({ event, resolve }) => {

    const { request } = event;
    const headers = request.headers;
    const cookies = cookie.parse(headers.get('cookie') || '');
    event.locals.user = cookies;
    if (!cookies.session_id) {
        event.locals.authenticated = false;
    } else {
        event.locals.authenticated = true;
    }
    const response = await resolve(event);

    return response;
}

export function getSession(event) {
    const authenticated = event.locals.authenticated;
    const { routeId } = event;
    if (!authenticated) {
        return {}
    } else {
        return event.locals
    }
}