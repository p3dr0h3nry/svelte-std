
import stringHash from 'string-hash';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import {user} from '../../store/auth';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	console.log('chamou')
	let body = await request.json();
	const res = await fetch('http://localhost:5001/svelte/signin', {
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
			console.log('retornar erro',res.statusText);
			return {
				status: 401,
				body: {
					message: "Unauthorized"
				}
			}
		}
		// return res;
		const data = await res.json();
		// const cookieId = uuidv4();
		const session = cookie.serialize('session_id', data.access_token, {
			httpOnly: true,
			maxAge: 60 * 60 * 8,
			sameSite: 'lax',
			path: '/'
		});
		console.log('data login----',data);
		const user = {...data.user};
		const name = cookie.serialize('name', user.name, {
			httpOnly: true,
			maxAge: 60 * 60 * 8,
			sameSite: 'lax',
			path: '/'
		});

		const headers = {        
			'Set-Cookie': [session, name]
		   }
		
		// console.log($user);
		return {
			status: 200,
			headers,
			body: {
				message: 'success'
			}
		};

}