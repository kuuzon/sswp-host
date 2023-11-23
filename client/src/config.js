const github = {
	baseURL: `${import.meta.env.VITE_GITHUB_API_URL}`,
	username: "kuuzon",
	options: {
		headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
			"Content-Type": "application/json",
      "Accept": "application/json"
		}
	}
}
export default github;