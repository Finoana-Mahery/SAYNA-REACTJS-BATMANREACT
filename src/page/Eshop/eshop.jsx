import "./eshop.scss";
import NavBar from "../../composant/navbar/NavBar";
import topFleche from "../../assets/icones/logo_bat_flèche.png";
import bottomFleche from "../../assets/icones/logo_bat_flèche_2.png";
import facebook from "../../assets/icones/icon_facebook.png";
import insta from "../../assets/icones/icon_ig.png";
import twitter from "../../assets/icones/icon_tw.png";
import down from "../../assets/icones/flèche_down_header.png";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

export default function Eshop({ windowWidth }) {
  return (
    <div className="eshop">
      <div className="containte">
        <NavBar number={3} windowWidth={windowWidth} />
        <div
          className="title"
          style={{
            height:
              (windowWidth < 800 && `200px`) ||
              (windowWidth < 900 && "300px") ||
              (windowWidth < 1200 && "600px") ||
              (windowWidth < 1400 && "700px"),
          }}
        >
          <h1
            style={{
              paddingBottom: windowWidth < 800 && "0px",
              fontSize: windowWidth < 800 && "24px",
            }}
          >
            Récuperez le flow de Batman avec notre e-shop !
          </h1>
        </div>
        {/*float-controle*/}
        {windowWidth > 1200 && (
          <div className="float_control">
            <a href="#header">
              <img src={topFleche} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="#footer">
              <img src={bottomFleche} alt="" />
            </a>
          </div>
        )}

        <div className="down">
          <img src={down} alt="" />
        </div>
      </div>
    </div>
  );
}
Eshop.propTypes = {
  windowWidth: PropTypes.number,
};
