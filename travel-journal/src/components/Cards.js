import React from "react";


export default function Cards(props){
    return(
        <div className="cards">
        <img src={props.img} className="card-images" alt="location icon"/>
       
        <div className="card--info">
        
            <span>
            <img src= {props.locationIcon} alt="location" className="location--image"/>
            </span>
            <span className="country--visited">{props.country}</span>
            <span className="viewOn">{props.view}</span>
      

            <p className="place--visited">{props.placeName}</p>
            <p className="date--visited">{props.dateVisited}</p>
            <p className="place--description">{props.description}</p>
        </div>
        
        </div>
    )
}