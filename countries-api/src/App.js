import React,{useEffect,useState} from 'react';
import Cards from './Cards';
import './App.css';

function App() {
  const [states,setState]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('');

  useEffect(()=>{
    getCountries();
  },[search]);

  const getSearch=(e)=>{
    setSearch(e.target.value);
    // setQuery({query:(filteredCountries)})
    // console.log(filteredCountries);
  }
  const filteredCountries=states.filter((state)=>(state.name.toLowerCase().includes(search.toLowerCase())))
  const getCountries= async ()=>{
    try{
      const response=await fetch("https://restcountries.eu/rest/v2/all")
      const data=await response.json();
      setState(data);
    }
    catch{
      alert('Sorry something went wrong')
    }
  };
  return (
    <div className="App">
      <h1>Hello React</h1>
      <input type="text" onChange={getSearch} placeholder="Search" value={search}/>
      <select>
       <option value="" disabled selected>Check all options</option>
        <option value="all">All</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      {states.map(cards=>(
        <Cards key={cards.name} name={(cards.name)} capital={cards.capital} population={cards.population}
          image={cards.flag}/>
      ))}
    </div>
  );
};

export default App;
