import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background: #20103B;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: auto;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin-bottom:70px;
`;

export const TypeIcons = styled.div`
width: 100%;
background: none;
display: flex;
justify-content: flex-start;
overflow-x: auto;
padding-bottom: 10px;

&::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #F36C21;
    border-radius: 3px;
  }

.inative{
        opacity: 0.5;
}

button{
        border:none;
        background:none;
        flex-shrink: 0;
}

img{
        width: 50px;
    height: 50px;
    margin: 10px 5px;
    cursor: pointer;
        
        &:hover {
                opacity: 0.85;
                transform: scale(1.03);
                transform: translateY(-2px);
        }
}
`;

export const Input = styled.div`
width: 100%;
display:flex;
flex-direction: column;
margin: 20px 0;

span{
        color:#ee6b26;
        margin: 5px 0;
}

input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ee6b26;
        background: #20103B;
        color:rgb(139, 137, 137);
}

input[type="date"],
input[type="time"] {
  color-scheme: dark;
  cursor: pointer;

    &::-webkit-calendar-picker-indicator {
    filter: invert(38%) sepia(94%) saturate(734%) hue-rotate(356deg) brightness(99%) contrast(91%);
    cursor: pointer;
  }
}

`;

export const TextArea = styled.div`
width: 100%;
display:flex;
flex-direction: column;
margin: 20px 0;

span{
        
        color:#ee6b26;
        margin: 5px 0;
}

textarea{
        font-size: 16px;
        padding: 15px;
        border: 1px solid #ee6b26;
        background-color: #20103B;
        color:rgb(139, 137, 137);
}
`
export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  button{
      font-weight:bold;
      color: #20103B;
      background: #ee6b26;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;

      &:hover{
        opacity: 0.7;
      }
  }

  div{
        display:flex;
        align-items: center;
        color: #ee6b26;
        font-weight:bold;
        font-size: 18px;
  }
`;

export const Save = styled.div`
        width: 100%;
        margin-top:20px;

  button{
        width: 100%;
        background: #ee6b26;
        border: none;
        font-size: 20;
        color: #fff;
        font-weight:bold;
        padding:20px;
        border-radius:30px;
        cursor: pointer;

        &:hover{
        opacity: 0.7;
      }
  }
`;