import { useParams } from "react-router";

const AboutPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>About page</h1>

        </div>
    )
}
export default AboutPage

// Component (About) cagirilanda Element olur! (<About/>)
