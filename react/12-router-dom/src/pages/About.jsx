import React from 'react'
import {Link, Outlet} from "react-router-dom";

function About() {
    return (
        <div>
            <div>About</div>
            <div>
                <hr/>
                <Link className={"sub-link"} to={"employee"}>Çalışanlar Hakkında</Link>
                <Link className={"sub-link"} to={"company"}>Şirket Hakkında</Link>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default About
