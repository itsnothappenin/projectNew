import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Basket.css";
function Basket() {
  return (
    <div>
      <Header />

      <div className="general-basket">
        <div className="img-h5">
          <img
            className="damla"
            src="	https://cdn.iticket.az/event/facebook/dttQ5b8temuQnzDPqU4JPZhtCv2EisAlFCO43QYO.jpg"
            alt=""
          />
          <h5>
            Cavanşir Quliyevin yaradıcılıq gecəsi ADSO Dirijor: M.Mehmandarov
          </h5>
        </div>
        <div className="btn-span">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
        <div className="btn-remove">
          <p>20 AZN</p>
          <button>Remove</button>
        </div>
      </div>

      <div className="general-basket">
        <div className="img-h5">
          <img
            src="https://images.genius.com/58d707ebb3cf5f29f79dee35d49d22e5.250x250x1.jpg"
            alt=""
          />
          <h5>Emin Sabitoğlu</h5>
        </div>
        <div className="btn-span">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
        <div className="btn-remove">
          <p>100 AZN</p>
          <button>Remove</button>
        </div>
      </div>

      <div className="general-basket">
        <div className="img-h5">
          <img src="	https://wallpaperaccess.com/full/1439408.jpg" alt="" />
          <h5>Blues night</h5>
        </div>
        <div className="btn-span">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
        <div className="btn-remove">
          <p>10 AZN</p>
          <button>Remove</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Basket;
