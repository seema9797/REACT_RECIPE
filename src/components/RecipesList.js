import React from 'react'
import './style.css'
import {v4 as uuid4} from 'uuid';

 const RecipesList = ({recipe}) => {
    return (
        recipe["recipe"]["image"].match('/\.(jpeg|jpg|gif|png)$/') !=null &&(
        <div className="recipeTile" onClick={()=>window.open(recipe["recipe"]["url"])}>
            
            <img className="recipeTile__img" src={recipe["recipe"]["image"]}/>
            <p className="recipeTile__name" key={uuid4()}>{recipe["recipe"]["label"]}</p>
        </div>
    )
    )
}

export default  RecipesList;