import { useEffect, useState } from "react"
import { getAliData } from "../../api/github"

const AliGithub = () => {
    const [data, setData] = useState({
        avatar_url: null,
        public_repos: '',
        followers: '',
        following: '',
    })
    useEffect(() => {
        const fetchData = async () => {
            const _d = await getAliData()
            setData(_d)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>Ali Github</h1>
            <img src={data.avatar_url} alt="Ali Github" style={{ maxWidth: 300 }} />
            <p>Public Repos: {data.public_repos}</p>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
        </div>
    )
}
export default AliGithub
