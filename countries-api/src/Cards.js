import React from 'react';

function Cards(props){
    return(
        <div className="cards">
            <img src={props.image} alt=""/>
            <p>{props.name}</p>
            <p>{props.capital}</p>
            <p>{props.population}</p>
        </div>
    );
}

export default Cards;