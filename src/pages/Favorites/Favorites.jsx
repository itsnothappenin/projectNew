import React from "react";
import "./Favorites.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

function Favorites() {
  const [list, setList] = useState([]);

  const deleteIndex = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <Header />

      <div className="general-favorites">
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
        <div className="btn-remove">
          <button onClick={() => deleteIndex()}>Remove</button>
        </div>
      </div>

      <div className="general-favorites">
        <div className="img-h5">
          <img
            className="damla"
            src="	https://wallpaperaccess.com/full/1439408.jpg"
            alt=""
          />
          <h5>Blue night</h5>
        </div>

        <div className="btn-remove">
          <button onClick={() => deleteIndex()}>Remove</button>
        </div>
      </div>

      <div className="general-favorites">
        <div className="img-h5">
          <img
            className="damla"
            src="https://images.genius.com/58d707ebb3cf5f29f79dee35d49d22e5.250x250x1.jpg"
            alt=""
          />
          <h5>Emin Sabitoğlu</h5>
        </div>

        <div className="btn-remove">
          <button onClick={() => deleteIndex()}>Remove</button>
        </div>
      </div>

      <div className="general-favorites">
        <div className="img-h5">
          <img
            src="https://cdns-images.dzcdn.net/images/cover/4eea469012130f024b5f47c12b972873/264x264.jpg"
            alt=""
          />
          <h5>Cem Adrian</h5>
        </div>

        <div className="btn-remove">
          <button onClick={() => deleteIndex()}>Remove</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Favorites;
