import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import "./index.css"
import Body from './components/Restaurant';
import Search from "./components/Search";


const AppLayout=()=>{
    const restaurants = [
        {
          image: "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1536x1024.jpg",
          Title: "Megana Foods",
          description: "Biryani, North Indian, Asian",
          rating: "4.4 stars",
          time: "39 Minutes",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVut6WFj_0fS7wkpixzDtRZw4YoCNXWamJXQ&s",
          Title: "Pizza Mania",
          description: "Pizza, Italian, Fast Food",
          rating: "4.7 stars",
          time: "30 Minutes",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfmWL3tkbxJvmCcMyy5GAdXc7vJF3CGbOCw&s",
          Title: "Sushi House",
          description: "Japanese, Sushi, Seafood",
          rating: "4.8 stars",
          time: "50 Minutes",
        },
        {
          image: "https://static.toiimg.com/thumb/msid-112019658,width-1280,height-720,resizemode-4/112019658.jpg",
          Title: "Ice Cream Corner",
          description: "Desserts, Ice Cream, Shakes",
          rating: "4.9 stars",
          time: "15 Minutes",
        },
        {
          image: "https://www.floramoments.in/cdn/shop/files/cake12.png?v=1714140684",
          Title: "Sweet Tooth",
          description: "Desserts, Pastries, Cakes",
          rating: "4.9 stars",
          time: "22 Minutes",
        },
        {
          image: "https://i.pinimg.com/736x/12/5d/e3/125de33be11a244e60d46cac504a0d9f.jpg",
          Title: "Chai & Snacks",
          description: "Snacks, Samosa, Tea",
          rating: "4.5 stars",
          time: "27 Minutes",
        }
      ];
      
    return(
        <>
        <Header />
        <Search/>
        <div style={{display:"flex", flexWrap:"wrap",gap:"30px",marginLeft:"40px",marginTop:"10px"}}>
            <Body data={restaurants}/>
        </div>

        </>
    )
}




// lets take root
ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>)