import { NavLink } from "react-router"

const NavbarLink = ({ to, title }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "fancy-text" : ''}
        >
            {title}
        </NavLink>
    )
}
const navroutes = [
    {
        id: -1,
        to: '/',
        title: 'home'
    },
    {
        id: 0,
        to: '/contact',
        title: 'contact'
    },
    {
        id: 1,
        to: '/about',
        title: 'about'
    },
]


const Navbar = ({ }) => {
    return (
        navroutes.map((params) => <NavbarLink key={params.id} {...params} />)
    )
}
export default Navbar
