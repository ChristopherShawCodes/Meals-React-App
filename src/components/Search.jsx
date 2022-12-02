import React,{useState} from 'react'
import { useGlobalContext } from '../context'
import '../App.css'
import {GoVerified} from 'react-icons/go'




const Search = () => {
  const [text, setText] = useState('')

  const {setSearchTerm, fetchRandomMeal} = useGlobalContext()

  const handleChange = (e) =>{
    setText(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      // setText('')
    }
  }

  const handleRandomMeal = () =>{
    // setSearchTerm('')
    // setText('')
    fetchRandomMeal()
  }


  return <header className='search-container'>
  <div className='logo'>The Food Spot <GoVerified/>
  <p id="sub">A Meal Ideas API App</p></div>
  <div className='form-div'>
      <form onSubmit={handleSubmit} >
      <input type="text" placeholder='search for a meal' value={text}  onChange={handleChange} className='form-input'/>
      <button type="submit" className='btn' >Search</button>
      <button type="button"  className='btn btn-hipster' onClick={handleRandomMeal}>Random</button>
    </form>
  </div>
  </header>
}

export default Search