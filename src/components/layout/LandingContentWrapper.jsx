import { Outlet } from "react-router"
import Navbar from "./Navbar"

const LandingContentWrapper = ({ }) => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>
                footer
            </footer>
        </div>
    )
}
export default LandingContentWrapper
