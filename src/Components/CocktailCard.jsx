import React from 'react'

function CocktailCard(props) {
    return (
        <div className="card column center">
        
        <img src={props.cocktail.strDrinkThumb} alt="cocktail" className="img-cocktail" />
        <p className="title">{props.cocktail.strDrink}</p>
       
        </div>
    )
}

export default CocktailCard
