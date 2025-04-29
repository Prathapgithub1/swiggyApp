import { useState } from "react";

const Body = ({ data }) => {
    let [restaurantData,setRestaurantData]=useState(data)
    return (
        <div>
            <button className="top-rated-restaurants" onClick={()=>{
                const filteredData=restaurantData.filter((data)=>{
                    return data.rating.split(' ')[0] >4.5
                })
                setRestaurantData(filteredData)
            }}>Top rated Restaurants</button>
            <div className="RestaurantContainer">
            {restaurantData.map((resturant) => (
                <div className="restaurantCard" key={resturant.id} >
                    <div className="imageCard" >
                        <img src={resturant.image} alt={resturant.Title} />
                    </div>
                    <h3>{resturant.Title}</h3>
                    <h4>{resturant.description}</h4>
                    <h4>{resturant.rating}</h4>
                    <h4>{resturant.time}</h4>
                </div>
            ))}

        </div>
        </div>
        
    )
}

export default Body;