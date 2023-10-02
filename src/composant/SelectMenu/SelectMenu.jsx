import React, { useState } from "react";
import "../SelectMenu/selectmenu.css";
import { BsChevronDown } from "react-icons/bs";

export default function SelectMenu() {
  const [isSelect, setIsSelect] = useState("");
  const [isOpen, setIsOpen] = useState("false");
  const handelSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handelIsSelect = (name) => {
    setIsSelect(name);
  };
  const menuList = ["Prix", "Date", "Taille"];
  return (
    <div className="input">
      <div
        className="afficheSelect"
        onClick={() => {
          handelSetIsOpen();
        }}
      >
        <p>Trier Par</p>
        <BsChevronDown color="red" width="50px" height="auto" />
      </div>
      {!isOpen && (
        <div className="contentOption">
          {menuList.map((menu, id) => (
            <Option
              key={id}
              name={menu}
              handelIsSelect={handelIsSelect}
              isSelect={isSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Option({ name, handelIsSelect, isSelect }) {
  return (
    <div
      className="option"
      onClick={() => {
        handelIsSelect(name);
      }}
      style={{ color: isSelect == name && "red" }}
    >
      <p>{name}</p>
    </div>
  );
}
