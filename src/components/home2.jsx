const Home2 = () => {


    let img = ['image/img6.jpg', 'image/img5.jpg', 'image/img2.jpg','image/img1.webp','image/img3.jpg','image/img4.jpg']
    
    return (
        
        <div className="fram">

{
             img.map((im) => (

                <div className="frame">

                    <img src={im} alt="" />
                </div>

            )) }
        </div>


    );
}

export default Home2;