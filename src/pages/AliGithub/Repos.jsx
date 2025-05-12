import { useEffect, useState } from "react"
import { getAliRepos } from "../../api/github"

const AliGithubRepos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const _d = await getAliRepos()
            setData(_d)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>Alion's followers</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.name}>
                        <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                        <span> {item.description && `[${item.description}]`}</span>
                    </li>
                ))}
            </ul>
        </div >
    )
}
export default AliGithubRepos
