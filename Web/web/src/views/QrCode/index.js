import React, {useState} from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import * as S from './styles';
import  Qr  from 'qrcode.react';

//componentes
import Header from '../../components/header';
import Footer from '../../components/footer';

function QrCode(){
    const [mac, setMac] = useState();
    const [redirect,setRedirect] = useState(false);

    async function SaveMac(){ 
        if(!mac)
            return alert("Você precisa informar o número que apareceu no seu celular");
        else{
            await localStorage.setItem('@TaskBloom/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }  
    }

    return(
        <S.Container>
            { redirect && <Redirect to="/"/> }
            <Header/>
            <S.Content>
                <h1>Capture o QR code pelo APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size = {300}/>
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite a numeração qe apareceu no seu celular.</span>
                    <input type="text" onChange={e => setMac(e.target.value)}value={mac}/>
                    <button type='button' onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>

            <Footer/>
        </S.Container>
    )
}

export default QrCode;