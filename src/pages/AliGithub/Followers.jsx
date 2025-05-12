import { useEffect, useState } from "react"
import { getAliFollowers } from "../../api/github"

const AliGithubFollowers = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const _d = await getAliFollowers()
            setData(_d)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>Alion's followers</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.login}>
                        <img src={item.avatar_url} alt={item.login} style={{ maxWidth: 50 }} />
                        <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.login}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AliGithubFollowers
