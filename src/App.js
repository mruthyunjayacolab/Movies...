// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Movies from './components/movies';
import Footer from './components/footer';
import FilmStars from './components/filmStar';
import PageNotFound from './components/404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddFovourties from './components/addFavourites';

// npm i react-router-dom@6 

// installl the react ===>  npm i react-router-dom@6

//  Step1:runing the app===>npx json-server --watch data/db.json --port 3001
// Step2:after th npm start

function App() {
  return (
    <div className="App">

      {/* <Navbar/>
      <Home/>
      <Movies/>
      <Footer/>
      <FilmStars/> */}                                                        

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/'element={<Home />} />
          <Route  path='/movies'element={<Movies />} />
          <Route path='/add-favouties' element={<AddFovourties/>}/>
          <Route  path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
