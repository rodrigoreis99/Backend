import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #3B1E57 ;
    border-bottom: 6px solid  #F36C21;
    display: flex;
    border-radius: 2%;
    
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    img{
        width: 140px;
        height: 150px;
    }    
    
`;

export const RightSide  = styled.div`  
    width: 50%;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: flex-end;

    a{
        color: #F4F4F4;
        font-family: 'Inter', sans-serif;
        font-weight:600;
        font-size: 13px;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #F36C21;
        }
    }

    #notification{
        img{
           width: 25px;
           height: 30px; 
        }

        span{
            background: #F4F4F4;
            color: #ee6b26;
            padding: 3px 7px;
            border-radius:50%;
            position:relative;
            top: -20px;
            right: 10px;
        }

        &:hover{
            opacity: 0.5;
        }
    }
    .dividir::after{
        content:"|";
        mergin:0 10px;
        color: #F4F4F4;
    }
`;