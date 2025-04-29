import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import "../index.css"
import Body from './components/Restaurant';
import Search from "./components/Search";
import restaurants from './utils/mockdata';

const AppLayout=()=>{
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