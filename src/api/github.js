import axios from "axios"

export const GITHUB_URL = process.env.REACT_GITHUB_API_URL + '/users/Ali-GreenHeart'


export const getAliData = async () => {
    const { data } = await axios.get(GITHUB_URL);

    const obj = {
        avatar_url: data.avatar_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
    }
    return obj;
}

export const getAliFollowers = async () => {
    const { data } = await axios.get(GITHUB_URL + '/followers');

    const followers = data.map((follower) => ({
        login: follower.login,
        avatar_url: follower.avatar_url,
        html_url: follower.html_url,
    }))
    return followers;
}
export const getAliRepos = async () => {
    const { data } = await axios.get(GITHUB_URL + '/repos');
    let reposCount = data.length;
    const randomIndexes = Array.from({ length: 10 }, () => Math.floor(Math.random() * reposCount));

    const repos = randomIndexes.map((index) => ({
        name: data[index].name,
        html_url: data[index].html_url,
        description: data[index].description
    }))
    return repos;
}
