import React from "react";
import "./Contacts.css";
import Footerdetail from "../../components/Footerdetail/Footerdetail";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
function Contacts() {
  return (
    <div>
      <Header />
      <div className="gcapef">
        <div className="contacts">
          <h3>Contacts</h3>
        </div>

        <div className="gapef">
          <div className="ape">
            <div className="address">
              <h5>
                <strong>Address: </strong>
              </h5>
              <p>123 Street, Province, Country </p>
            </div>
            <div className="phone">
              <h5>
                <strong>Phone </strong>
              </h5>
              +1. 123 456 78 / 1. 111 222 333
            </div>
            <div className="email">
              <h5>
                <strong>Email </strong>
              </h5>
              <p> info@ticketbox.az </p>
            </div>
          </div>

          <div className="footerdetail">
            <Footerdetail />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
