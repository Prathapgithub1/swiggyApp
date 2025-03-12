const Body=({data})=>{
//    console.log(item)
    return (
        <div className="RestaurantContainer">
            {data.map((resturant,index)=>(
                 <div className="restaurantCard">
                 <div className="imageCard">
                     <img src={resturant.image} alt="biryani" />
                 </div>
                 <h3>{resturant.Title}</h3>
                 <h4>{resturant.description}</h4>
                 <h4>{resturant.rating}</h4>
                 <h4>{resturant.time}</h4>
             </div>
            ))}
           
        </div>
    )
}

export default Body;