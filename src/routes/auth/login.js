
import stringHash from 'string-hash';
import * as cookie from 'cookie';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	let body = await request.json();
	const res = await fetch('https://tsm-backend.herokuapp.com//svelte/signin', {
		method: 'POST',
		body: JSON.stringify({
			username: body.username,
			password: stringHash(body.password)
		}),
		credentials: 'same-origin',
		headers: {
			'Content-type': 'application/json'
		}
	});
	if (!res.ok) {
		return {
			status: 401,
			body: {
				message: "Unauthorized"
			}
		}
	}
	const data = await res.json();
	const session = cookie.serialize('session_id', data.access_token, {
		httpOnly: true,
		maxAge: 60 * 60 * 8,
		sameSite: 'lax',
		path: '/'
	});
	const user = { ...data.user };
	const name = cookie.serialize('name', user.name, {
		httpOnly: true,
		maxAge: 60 * 60 * 8,
		sameSite: 'lax',
		path: '/'
	});

	const headers = {
		'Set-Cookie': [session, name]
	}
	return {
		status: 200,
		headers,
		body: {
			message: 'success'
		}
	};

}