import { Link } from "react-router-dom"

export const About = () => {
    return (
        <div>
            Página sobre:
            <ul>
                <li><Link to="/sobre/bonieky" >Bonieky</Link></li>
                <li><Link to="/sobre/pedro" >Pedro</Link></li>
            </ul>
        </div>
    )
}