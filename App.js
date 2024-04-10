import React from "react"
import ReactDOM from "react-dom/client"



const Header = ()=> {
    return(<div className='header'>
        <div className= "logo"> <img className= 'logo' src="https://i.imgur.com/x2Hd1XB.png" /> </div>
        <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>)
}

            // const Search = ()=>{
            //     return(
            //     <div className='Search'>
            //         <input id='Find' padding='5px'>What do you want to eat today? </input> <button id='Finding'>Search</button>
            //     </div>
            //     )
            // }

const Restaurant = ()=>(
    <div className="restaurant">
        <img className="image" src="https://b.zmtcdn.com/data/pictures/chains/3/19267043/4e86bfc9293daa1c36b22cd378bbebcf_featured_v2.jpg?output-format=webp"/>
        <h2>Barbeque Munchies</h2>
        <h5>Barbaque, North Indian</h5>
        <h5>4.3 ⭐</h5>
    </div>
)

const RestContainer = ()=>(
    <div className="restcontainer">
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
    </div>
)



const Body = ()=>{
    return(
        <div className="body">

            <RestContainer/>
        </div>
        )
}

const AppLayout = ()=> {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);