import React, { useEffect, useState } from "react"
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8525adbbe0845dba1540a94b5fe62beb`
            const response = await fetch(url);
            
            const resJson = await response.json();
            console.log(resJson);
        }


        fetchApi();
    })

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputFeild"
                        onChange={(event) => {

                        }} />

                </div>



                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{city}
                    </h2>
                    <h1 className="temp">

                    </h1>
                    <h3 className="tempmin_max">
                        Min : 5.25°Cel | Max : 5.25°Cel
                    </h3>
                </div>

                <div className="wave-one"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>

            </div>
        </>
    )
}

export default Tempapp;