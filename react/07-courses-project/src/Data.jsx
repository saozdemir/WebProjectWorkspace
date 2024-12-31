import Csharp from './images/csharp.png';
import Java from "./images/java.png";
import Sql from "./images/sql.png";
import Web from "./images/web.png";
//!JSON formatında dataclass tanımlama işlemi yapıldı.
export const courses = [
    {
        id: 1234,
        title: "C# Programlama",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore assumenda delectus libero atque possimus tempora quia quas, praesentium adipisci omnis?",
        price: 120,
        link: "https://localhost/charp",
        image: Csharp
    },
    {
        id: 1235,
        title: "Java Programlama",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore assumenda delectus libero atque possimus tempora quia quas, praesentium adipisci omnis?",
        price: 130,
        link: "https://localhost/java",
        image: Java
    },
    {
        id: 1236,
        title: "SQL Eğitimi",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore assumenda delectus libero atque possimus tempora quia quas, praesentium adipisci omnis?",
        price: 120,
        link: "https://localhost/sql",
        image: Sql
    },
    {
        id: 1237,
        title: "Web Programlama",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore assumenda delectus libero atque possimus tempora quia quas, praesentium adipisci omnis?",
        price: 120,
        link: "https://localhost/web",
        image: Web
    }
]