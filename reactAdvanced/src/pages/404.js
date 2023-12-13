import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <p>Page doesn't exist</p>
            <Link to="/">Return to main page</Link>
        </div>
    )
}

export default Page404