import '../styles/home.css'


const Home = () => {

    let img = ['image/img6.jpg', 'image/img5.jpg', 'image/img2.jpg', 'image/img1.webp', 'image/img3.jpg', 'image/img4.jpg']

    let image = [
        {
            img1: 'image/img6.jpg'
        },

        {
            img1: 'image/img5.jpg'
        },
        {
            img1: 'image/img3.jpg'
        },
        {
            img1: 'image/img2.jpg'
        },
        {
            img1: 'image/img1.webp'
        }

    ]

    return (


        <div className="home">
            <div className="banner">

                <div className="description">

                    <p> All time best worthy movie in just one click All time best worthy movie in just one click</p>
                    <button> Subscribe Now</button>
                </div>
                <div className="banner_img">
                    <img src="image/hovi.jpg" alt="" />
                </div>
            </div>


            <h1> Recommended</h1>


            {
                img.map((im) => (

                    <div className="movies_list">
                        {/* <img src="image/img1.webp" alt="" />
                <img src="image/img2.jpg" alt="" />
                <img src="image/img3.jpg" alt="" />
                <img src="image/img4.jpg" alt="" />
                <img src="image/img5.jpg" alt="" />
                <img src="image/img6.jpg" alt="" /> */}
                        <img src={im} alt="" />
                    </div>
                ))
            }




            <div className="movi_list">

                <h1> Moveii list....</h1>

                {
                    image.map((data) => (

                        <img src={data.img1} alt="" />

                    ))
                }
            </div>
        </div>
    );
}

export default Home;