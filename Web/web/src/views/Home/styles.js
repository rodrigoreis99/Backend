import styled from 'styled-components';

export const Container = styled.div`
        width: 100%;
        min-height: 100vh;
        background: #20103B; // fundo da home no padrão da paleta
    
`;

export const FilterArea = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background:none;
        border: none;
    }

`;

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    
`;

export const Title = styled.div`
    width:100%;
    border-bottom:1px solid #F36C21;
    display: flex;
    justify-content: center;
    margin-bottom:20px;

    h3{
        color: #FFFFFF;
        position: relative;
        top: 30px;
        background: #20103B;
        padding: 0 10px;
        

    }
`;