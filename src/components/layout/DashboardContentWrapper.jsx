import { Link, Outlet } from "react-router"

const DashboardContentWrapper = () => {
    return (
        <div>
            <Link to="/">ana sehife</Link>
            <p>sidebar</p>
            <Outlet />
            <footer>
                footer
            </footer>
        </div>
    )
}
export default DashboardContentWrapper
