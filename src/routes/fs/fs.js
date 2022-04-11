import fs from 'fs/promises';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    let body = await request.json();
    let {listOrders} = body;
    let pedidos = [...listOrders];
    return {}
}