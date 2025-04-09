import React from 'react';
import * as S from './styles';
import filter from "../../assets/filter.png";

function FilterCard({title, selected}) {
  return (
    <S.Container selected ={selected}>
      <img src = {filter} alt="Filtro"/>
      <span>{title}</span>
    </S.Container>
  );
}

export default FilterCard;
