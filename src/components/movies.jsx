import { useEffect, useState } from 'react';
import '../styles/movies.css'
import MoviesLogic from './moviesLogic';


const Movies = () => {
    

    let [favsData, setData] = useState([])
    useEffect(()=>{

        let fetchData=async()=>{

            let response= await fetch('http://localhost:3001/favourties')
            let data= await response.json()
            setData(data)

        }
        fetchData()
    },[])
    let remove = (id, title, rating) => {

        setData(favsData.filter(x => x.id != id))
        alert(`${title} ${rating}Deletered`)
       

    }
    return (
        <div className="moivess">
             <h1 >Movies..Movies logics..</h1>
            <MoviesLogic title="Favourties of all Time"
                data={favsData}
                fn={remove}
            />
                {/* reusing og the codess */}
            <MoviesLogic title = "Top rated"
                data={favsData.filter(x=>x.rating>=4.5)}
               
            />

                 {/* reusing og the codess */}
            <MoviesLogic title="Languages -- only English Movies"
                data={favsData.filter(x=>x.languages=="english")}
               
            />
        </div>
    );
}

export default Movies;