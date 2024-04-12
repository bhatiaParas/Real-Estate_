import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="https://github.com/safak/react-estate-ui/blob/completed/public/pin.png?raw=true" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="https://github.com/safak/react-estate-ui/blob/completed/public/bed.png?raw=true" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="https://github.com/safak/react-estate-ui/blob/completed/public/bath.png?raw=true" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="https://github.com/safak/react-estate-ui/blob/completed/public/save.png?raw=true" alt="" />
            </div>
            <div className="icon">
              <img src="https://github.com/safak/react-estate-ui/blob/completed/public/chat.png?raw=true" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;