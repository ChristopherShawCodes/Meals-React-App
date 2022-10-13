import React from 'react'
import { useGlobalContext } from '../context'


const Modal = () => {
  const {selectedMeal, closeModal} = useGlobalContext()

  const {strMealThumb:image, strMeal:title, strInstructions: text, strSource:source} = selectedMeal


  return <aside className='modal-overlay'>
    <div className='modal-container'>
    <div className='modal-close-container'>
    <button className='close-btn' onClick={closeModal}>X</button>
    </div>
    <img src={image} alt={title} className='img modal-img'/>
    <div className='modal-content' >
      <h4>{title}</h4>
      <p>Cooking Instructions:</p>
      <p>{text}</p>
      <a href={source} target='_blank'>Original Source </a>
    </div>

    </div>
  </aside>
}

export default Modal