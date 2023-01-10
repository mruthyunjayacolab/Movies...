<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const MoviesLogic = (props) => {
    let header = props.title// haeading
    let fev = props.data// array
    let remove = props.fn//remove

    return (
        <div className="favs">
            <h1> {header}</h1>
           
            <div className="favs">
                {
                    fev.map((data) => (

                        <div className="favs_list">

                            <h2>{data.title}</h2>
                            <h2>{data.languages} / {data.ganer}</h2>
                            <h3>{data.rating} ⭐<span class="fa fa-star checked"></span></h3>
                            <button onClick={() => remove(data.id, data.title, data.rating)}>Delete</button>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default MoviesLogic;