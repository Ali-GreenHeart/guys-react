import { NavLink, Outlet } from "react-router"

const AliGithubContentWrapper = () => {
    return (
        <div>
            <header>
                <NavLink to='/ali-github' >Ali github</NavLink>
                <NavLink to='followers' >Ali followers</NavLink>
                <NavLink to='repos' >Ali repos</NavLink>
            </header>
            <Outlet />
        </div>
    )
}
export default AliGithubContentWrapper
