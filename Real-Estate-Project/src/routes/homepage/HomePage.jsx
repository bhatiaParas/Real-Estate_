
import SearchBar from '../../components/searchBar/SearchBar';
import  './HomePage.scss';

function HomePage(){

    return(
        <div className="homePage">
            
            <div className="textContainer">
                <div className="wrapper">

                <h1 className='title'>
                    Find Real Estate & Get Your Dream Place
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus rem, 
                    tempora tenetur, dolore voluptatem soluta suscipit alias voluptatum id explicabo 
                    commodi animi debitis officiis nulla, corrupti distinctio. Temporibus, esse.
                </p>

                <SearchBar />

                <div className="boxes">
                    <div className="box">

                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">

                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">

                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>


                </div>
            </div>
            <div className="imgContainer">

                <img src="https://github.com/safak/react-estate-ui/blob/completed/public/bg.png?raw=true" 
             
                alt="" />
            </div>

        </div>
    )
    
}
export default HomePage;