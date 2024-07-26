import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';
import DOMPurify from 'dompurify';

function SinglePage () {
  const post = useLoaderData() ;
  // Destructure with default values

  const user = post.user || {};
  const postDetail = post.postDetail || {};
  const images = post.images || [];

  console.log(post.images);


 

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                <Slider images={images} />
                    <div className="info">
                      <div className="top">
                        <div className="post">
                            <h1>{post.title}</h1>
                            <div className="address">
                                <img src="/pin.png"
                                 alt="" />
                                 <span>{post.address}</span>
                            </div>
                            <div className="price">$ {post.price}</div>
                        </div>
                        <div className="user">
                            <img src= {user.avatar} alt="" />
                            <span>{user.username}</span>
                        </div>
                    </div>
                    <div className="bottom"   dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(postDetail.desc),
                        }}>
                    </div>
                    </div>
                </div>
            </div>
            <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" 
               alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" 
               alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png"
               alt="" />
              <div className="featureText">
                <span>Income Fees</span>
                <p>{postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png"
               alt="" />
              <span>{postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png"
               alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png"
               alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png"
               alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {postDetail.school > 999
                    ? postDetail.school / 1000 + "km"
                    : postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
           <Map items={[post] } />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png"
               alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png"
               alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SinglePage;


