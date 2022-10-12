import React from "react";
import Footer from "../../components/Footer/Footer";
import Footerdetail from "../../components/Footerdetail/Footerdetail";
import Header from "../../components/Header/Header";
import "./RefundExchange.css";

function RefundExchange() {
  return (
    <div className="refundfootheader">
      <Header />
      <div className="header">
        <h3>Refund and exchange</h3>
      </div>
      <div className="refundfoot">
        <div className="main">
          <h5>
            Ticket refund or ticket change is subject to the following penalty
            charges:
          </h5>
          <p>
            48 hours and more prior to the event – 30% is charged from a ticket
            price. Tickets are non-refundable and non-changeable on the event
            day. Tickets purchased from city box offices can be exchanged and
            returned at the box offices located in 28 Mall and Ganjlik Mall.
            Contact: +994 12 456 78 11. For tickets purchased from the website
            TicketBox.az contact us via call +994 12 492 34 77.
          </p>
        </div>
        <div>
          <Footerdetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RefundExchange;
