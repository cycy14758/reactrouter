import React, { useState } from 'react';
import Nav1 from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
import CardList from './CardList';
import './App.css';
import arr from './Data';
import { useEffect } from 'react';
import {Routes,Link,Route, }from 'react-router-dom';
import Details from './Details';


function App() {
  const [data, setData] = useState(arr);
  const [rating, setRating] = useState(0);
  const [searchTitle, setSearchTitle] = useState('');
  
useEffect(() => {
  setData(arr)

}, [])


  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSearch = () => {
    const filteredResults = data.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(searchTitle.toLowerCase());
      const ratingMatch = movie.rating >= rating;
      return titleMatch && ratingMatch;
    });
    return filteredResults;
  };

  function onAdd(title, description, rating) {
    setData([...data, { title: title, description: description, rating: rating }]);
  }

  const filteredData = handleSearch();

  return (

    <div className="App">
    <Routes>
       <Route path='/Add' element={<Nav1 onAdd={onAdd} />}/>
      <Route path='/'  
         element={  <div className="prt">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Rating onClick={handleRating} ratingValue={rating} />
          <button onClick={handleSearch}>Search</button>
        </div>
      <Link  to={"/Add"} > <button style={{backgroundColor:"violet"}} >Add</button></Link> 
        <CardList info={filteredData} />
      </div>}
      />
      <Route  path='/details/:x'  element={<Details  info={data}  />} />
</Routes>
    </div>
  );
}

export default App;
