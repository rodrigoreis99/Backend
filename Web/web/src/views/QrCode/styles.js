import styled from 'styled-components';

export const Container = styled.div`
        width: 100%;
       // max-width: 1200px;
        display:flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background: #20103B;
        overflow-y: auto;
        padding-bottom: 80px;
    
`

export const Content = styled.div`
        width:50%;
        display:flex;
        flex-direction: column;
        align-items: center;

        h1, p{
                color: #FFFFFF;
        }
        
`
export const QrCodeArea = styled.div`
        width: 80%;
        max-width: 350px;
        display:flex;
        justify-content:center;
        margin: 20px 0;
`
export const ValidationCode = styled.div`
        display: flex;
        flex-direction: column;
        margin:10px;
        //width: 100%;

        span{
                text-transform: uppercase;
                font-weight: bold;
                color: #fff;
        }
        input{
                font-size:18px;
                padding: 10px;
                text-align: center;
        }
        button{
                font-weight: bold;
                background: #ee6b26;
                color: #fff;
                font-size: 18px;
                padding: 10px;
                border-radius: 30px;
                border: none;
                cursor: pointer;
                margin-top:10px;
                

                &:hover{
                        background: #20295f;
                }
        }
`
