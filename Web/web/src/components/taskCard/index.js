import React from 'react';
import * as S from './styles';
import IconDefault from '../../assets/default.png'


function TaskCard() {
  return (
    <S.Container>
      
      <S.TopCard>
      <img src={IconDefault} alt="Icone da Tarefa."/>
      <h3>Título da Tarefa</h3>
      </S.TopCard>
      
      <S.BottomCard>
        <strong>
            10/04/2025          
        </strong>
        <span>
            10:00
        </span>
      </S.BottomCard>
      
    </S.Container>
  );
}

export default TaskCard;
