 import Filter from '../../components/filter/Filter';
import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

 function ListPage(){

    const data = listData;
    return (
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
            
            <Filter />
            {data.map((item)=>(
                <Card key={item.id} item={item}/>
                //item ka use database src -> lib -> database.js ko access karne ke liye use kia ha
            ))}
                </div> 
            </div>

            <div className="mapContainer">
               <Map items={data}/>
            </div>
        </div>
    )
 }

 export default ListPage;