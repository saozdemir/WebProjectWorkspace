import './App.css'
import Header from "./Header.jsx";
import {courses} from "./Data.jsx";
import Course from "./Course.jsx";
import React from "react";

import "./css/Course.css"

function App() {

    return (<div>
        <Header></Header>
        <div className={"course-main"}>
            {courses?.map((course) => (//! "courses?" dolu mu anlamında kullanılır.
                <Course key={course.id} course={course}></Course>))}
        </div>
    </div>)
}

export default App
