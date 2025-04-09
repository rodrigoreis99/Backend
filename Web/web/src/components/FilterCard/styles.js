import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 60px;
    background: ${props =>props.selected ? '#5E239D'  : '#2E2145'};
    border: ${props => props.selected ? '2px solid #F36C21' : 'none'};    padding: 10px;
    cursor: pointer;
    
    border-radius: 5px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size:18 px;
    }

    &:hover{
        background-color: #3B1E57; /* Levemente mais claro ao passar o mouse */
        box-shadow: 0 0 50px rgba(241, 86, 2, 0.3); /* Brilho suave laranja */
        transform: translateY(-2px); /* Efeito de leve elevação */
    }
`;