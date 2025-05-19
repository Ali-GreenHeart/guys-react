import { Outlet } from "react-router"
import Navbar from "./Navbar"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const LandingContentWrapper = () => {
    const { username } = useContext(AuthContext)
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>
                footer
            </footer>
            {username || "🔁"}
        </div>
    )
}
export default LandingContentWrapper
