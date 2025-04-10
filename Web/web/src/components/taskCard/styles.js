import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 150px;
  background: #20103B; // roxo escuro padrão
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 50px rgba(241, 86, 2, 0.3);
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #ffffff;
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  strong {
    color: #F36C21; // laranja padrão
    font-weight: bold;
  }

  span {
    color: #B9B9B9; // texto secundário
  }
`;
