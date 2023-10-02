import { React, useState, useContext, useEffect } from "react";
import "../ContainteResultFind/ContainteResultFind.scss";
import { AppContext } from "../../Context";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { TbCurrencyEuro } from "react-icons/tb";

export default function ContainteResultFind() {
  const { data } = useContext(AppContext);

  return (
    <div className="ContainteResultFind">
      {data.map((art, id) => (
        <Ithems
          key={id}
          titre={art.nameArt}
          bg={art.pictureArt}
          price={art.prixArt}
          isSale={art.isSale}
        />
      ))}
    </div>
  );
}

function Ithems({ bg, titre, price, isSale }) {
  const [like, setLike] = useState(false);

  const onClickLike = () => {
    setLike(!like);
  };
  return (
    <div className="ithems">
      <div className="mainIthems">
        <div
          className="imgContainte"
          style={{
            backgroundImage: `url("../../../public/image/${bg}")`,
          }}
        >
          <div className="headImg">
            <button
              className="btnsale"
              style={{ visibility: !isSale && "hidden" }}
            >
              SALE
            </button>

            {like == false ? (
              <AiOutlineHeart
                color="rgb(170, 0, 0)"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => onClickLike()}
              />
            ) : (
              <AiTwotoneHeart
                color="rgb(170, 0, 0)"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => onClickLike()}
              />
            )}
          </div>
        </div>
        <div className="descContainte">
          <p>{titre}</p>

          <p>
            {price}
            <TbCurrencyEuro></TbCurrencyEuro>
          </p>
        </div>
      </div>
      <Boutton />
    </div>
  );
}

function Boutton() {
  return <button className="btnAdd">AJOUTER AU PANIER</button>;
}
