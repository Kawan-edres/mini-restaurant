import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";
import {useContext} from 'react';
import ModeSwicher from './ModeSwicher';

function MenuCard({ imgSrc, name, isActive }) {

  const context = useContext(ModeSwicher);

  return (
    <div>
    <div className={`${context.isDark?"rowMenuCardDark":"rowMenuCard"}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      
    </div>
    </div>
  );
}

export default MenuCard;
