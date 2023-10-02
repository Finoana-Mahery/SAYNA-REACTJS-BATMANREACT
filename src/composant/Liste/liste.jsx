import "../Liste/liste.scss";
import Kadi from "../../assets/icones/icone_1.png";
import * as React from "react";
import SelectMenu from "../SelectMenu/SelectMenu";
import ContainteResultFind from "../ContainteResultFind/ContainteResultFind";
import { AppContext } from "../../Context";

export default function Liste() {
  const { nbRes } = React.useContext(AppContext);

  return (
    <div className="catal">
      <div className="catal_head">
        <h1>Filtres</h1>
        <img src={Kadi} alt="" />
      </div>
      <div className="caseCatalogue">
        <div className="leftFilter"></div>
        <div className="afficheResult">
          <div className="headResult">
            <h1>Résultats : {nbRes}</h1>
            <SelectMenu />
          </div>
          <ContainteResultFind />
        </div>
      </div>
    </div>
  );
}
