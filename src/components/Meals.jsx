import { useGlobalContext } from "../context"
import {BsHeart,BsHeartFill} from 'react-icons/bs'

const Meals = () => {
  const {meals,loading, selectMeal,addToFavorites} = useGlobalContext()
  
  if(loading){
    return <section className="section">
      <h4>Loading......</h4>
    </section>
  }
  if(meals.length < 1){
    return <section className="section">
      <h4>There are no currently no meals matching your search. Please try again.</h4>
    </section>
  }
  
  return <section className="section-center">
      {meals.map((singleMeal)=>{
        const {idMeal, strMeal: title, strMealThumb: image} = singleMeal

        return <article key={idMeal} className="single-meal">
        {/* without the arrow function within onClick the modal would render upon page loading */}
        <img src={image} className="img" onClick={() => selectMeal(idMeal)}/>
        <footer>
          <h5>{title}</h5>
          <button className="like-btn" onClick={()=> addToFavorites(idMeal)}><BsHeart/></button>
        </footer>
        </article>
      })}
    </section>

}

export default Meals