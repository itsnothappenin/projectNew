import "./Cards.css";
import circle from "./circle-check-solid.svg";
import cart from "./cart-shopping-solid.svg";
import ticket from "./ticket-solid.svg";

function Cards() {
  return (
    <div className="home_cards">
      <div className="home_card">
        <img src={circle} />
        <p className="p1">CHOOSE EVENTS AND TICKETS</p>
        <p className="p2">with only a few clicks</p>
      </div>
      <div className="home_card">
        <img src={cart} />
        <p className="p1">BUY DIRECTLY FROM ORGANIZERS</p>
        <p className="p2">pay online or cash on delivery</p>
      </div>
      <div className="home_card">
        <img src={ticket} />
        <p className="p1">RECIEVE TICKETS</p>
        <p className="p2">via email or right at your door</p>
      </div>
      <div>Guten Tag</div>
    </div>
  );
}

export default Cards;
