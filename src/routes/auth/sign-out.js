/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request }) {
    return {
        status: 302,
        headers: {
            'location': '/auth',
            'Set-cookie': [`session_id=; path=/; expires=0`,`name=; path=/; expires=0`]
        }
    }
}