const API = {
	url: "/data/menu.json",
	fetchMenu: async () => {
		const result = await fetch(API.url); 		// HTTP response 
		return await result.json();  // Parse the HTTP result as a JSON
	}
}

export default API;