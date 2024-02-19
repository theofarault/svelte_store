import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.produitId != undefined) {
		return {
			id:params.produitId
		};
	}

	error(404, 'Not found');
}