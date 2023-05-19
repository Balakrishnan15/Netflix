import React from 'react';
import './App.css';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     {/* <h1> Bala</h1> */}
     <Nav/>
     <Banner/>
    
     <Row title="NETFLIX ORGINAL"  id="surya" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
  
    </div>
  );
}

export default App;
