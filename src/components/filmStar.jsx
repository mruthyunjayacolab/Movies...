import { useState } from "react";
import '../styles/filmStars.css'

const FilmStars = () => {
    //database
    let starss = [
        {
            img: "image/rajkumar.jpeg",
            name: "PUNIT RAJKUMAR",
            id: 1
        },
        {
            img: "image/srk.jpeg",
            name: "SHAH RUKH KHAN",
            id: 2
        },
        {
            img: "image/uppi.jpeg",
            name: "UPENDRA",
            id: 3
        },
        {
            img: "image/reshab.jpg",
            name: "RISHAB SHETTY",
            id: 4
        },
        {
            img: "image/Yash.jpg",
            name: "Yash",
            id: 5
        }


    ]

    let [value, setdata] = useState(starss)
    let del = (id, name) => {
        setdata(value.filter(x => (x.id) != id))

        alert(`${name} has been rempoved`)
    }
    return (
        <div className="stars">
            <h1>PUBLIC STARS</h1>
            {
                value.map(data => (
                    <div className="stars-list">
                        <div className="images">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="h1">
                            <h2>{data.name}</h2>
                            <button onClick={() => del(data.id, data.name)}>delete</button>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default FilmStars;