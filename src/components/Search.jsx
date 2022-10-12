import React,{useState} from 'react'
import { useGlobalContext } from '../context'
import '../App.css'
import {BsHeart} from 'react-icons/bs'


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
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }


  return <header className='search-container'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='search for a meal' value={text}  onChange={handleChange} lassName='form-input'/>
      <button type="submit" className='btn' >Search</button>
      <button type="button"  className='btn btn-hipster' onClick={handleRandomMeal}>Random</button>

    </form>

  </header>
}

export default Search