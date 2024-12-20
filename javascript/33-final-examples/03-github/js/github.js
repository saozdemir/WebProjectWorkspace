/** Github API sini kullanacak JS kodları burada. 
 * 
 * Kullanıcı Getir => https://api.github.com/users
 * Repoları Getir => https://api.github.com/users/saozdemir/repos
 */

class GitHub {
    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGitHubData(username) {
        const userData = await (await fetch(`${this.url}${username}`)).json();
        const repoData = await (await fetch(`${this.url}${username}/repos`)).json();
        return {
            user: userData,
            repo: repoData
        }
    }
}
export { GitHub };