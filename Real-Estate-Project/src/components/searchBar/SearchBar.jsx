import { useState } from 'react';
import './searchBar.scss'

function SearchBar () {

    const types = ['Buy', 'Rent']

    const [query , setQuery] = useState({

        type: "Buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })


    const switchType = (val) => {
        setQuery((prev) => ({...prev , type:val}))
    }
    return (

        <div className="searchBar">
            
            <div className="type">

                {types.map((type) => (
                    <button
                    key={type}
                    onClick={() => switchType(type)}
                    className={query.type === type ? "active" : ""}
                    >{type}</button>
                ))}
                
            </div>


                <form>

                    <input 
                    type="text"
                    name='location' 
                    placeholder='City Location'
                    />
                    <input 
                    type="number"
                    name='maxPrice' 
                    min={0}
                    max={1000000}
                    placeholder='Min Price'
                    />
                    <input 
                    type="number"
                    name='maxPrice' 
                    min={0}
                    max={1000000}
                    placeholder='Max Price'
                    />

                    <button>
                      
                        <img src="https://github.com/safak/react-estate-ui/blob/completed/public/search.png?raw=true"
                         alt="" 
                         
                         />
                        
                         
                    </button>
                </form>
            
        </div>
    )  
}

export default SearchBar;