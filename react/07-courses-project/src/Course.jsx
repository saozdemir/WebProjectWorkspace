import React from 'react'

function Course({course}) {
    const {id, title, description, price, link, image} = course;//? Destructing yapıldı.
    console.log(course);

    return (
        <div className={"course"}>
            <img src={image} width={220} height={110}></img>
            <h4 className={"course-title"}>{title}</h4>
            <p className={"course-description"}>{description}</p>
            <h3 className={"course-price"}>{price}</h3>
            <div className={"course-link"}><a href={link} style={{textDecoration: "none"}}>Satın Al</a>
            </div>

        </div>)
}

export default Course
