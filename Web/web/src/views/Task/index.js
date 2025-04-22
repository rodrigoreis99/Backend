import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import * as S from './styles';
import {format} from 'date-fns';

import api from '../../services/api';
//componentes
import Header from '../../components/header';
import Footer from '../../components/footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';


function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [lateCount,setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId]= useState();
    const [done, setDone]= useState(false);
    const [title, setTitle]= useState();
    const [description, setDescription]= useState();
    const [date, setDate]= useState();
    const [hour, setHour]= useState();
    const [macaddress, setMacaddress]= useState('00:1B:44:11:3A:B7');
  

  async function LateVerify(){
    await api.get(`/task/filter/late/00:1B:44:11:3A:B7`)
    .then(response =>{
        setLateCount(response.data.length)
    })
  }

  async function LoadTaskDetails() {
    await api.get(`/task/${match.params.id}`)
    .then(response => {
      setType(response.data.type)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format (new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format (new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save() {
    if (!title)
      return alert("Você precisa informar o título da tarefa");
    else if (!description)
      return alert("Você precisa informar a descrição da tarefa");
    else if (!type)
      return alert("Você precisa informar o tipo da tarefa");
    else if (!date)
      return alert("Você precisa informar a data da tarefa");
    else if (!hour)
      return alert("Você precisa informar a hora da tarefa");
  
    let when = `${date}T${hour}:00.000`;
  
    // ✅ Garante que a data/hora seja sempre no futuro (acrescenta 1 min se necessário)
    if (match.params.id) {
      const whenDate = new Date(when);
      const now = new Date();
      if (whenDate <= now) {
        whenDate.setMinutes(whenDate.getMinutes() + 1);
        const newDate = format(whenDate, 'yyyy-MM-dd');
        const newHour = format(whenDate, 'HH:mm');
        setDate(newDate);
        setHour(newHour);
        when = `${newDate}T${newHour}:00.000`;
      }
    } 
  
    try {
      if (match.params.id) {
        await api.put(`/task/${match.params.id}`, {
          macaddress,
          done,
          type,
          title,
          description,
          when
        });
      } else {
        await api.post('/task', {
          macaddress,
          type,
          title,
          description,
          when
        });
      }
  
      setRedirect(true);
    } catch (error) {
      console.error("❌ Erro ao salvar:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Erro ao salvar tarefa.");
    }
  }
  

  useEffect(()=>{
    LateVerify();
    if (match.params.id) {
      LoadTaskDetails();
    }
  }, [])

  return (
    <S.Container>
      {redirect ? <Redirect to="/" /> : null }
      <Header lateCount={lateCount}/>
      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 &&
              <button type ="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da tarefa" 
                className={type && type != index && 'inative'}/>
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Titulo</span>
          <input type="text" placeholder='Titulo da tarefa...'
            onChange={e =>setTitle(e.target.value)} value={title}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder='Detalhes da tarefa...'
            onChange={e => setDescription(e.target.value)} value={description}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder='Data da tarefa...'
            onChange={e => setDate(e.target.value)} value={date}
          />
          <img src={iconCalendar} alt="Calendário"/>
        </S.Input>

      <S.Input>
          <span>Hora</span>
          <input type="time" placeholder='Hora da tarefa...'
            onChange={e => setHour(e.target.value)}value={hour}
          />
          <img src={iconClock} alt="Relógio"/>
        </S.Input> 

        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </div>
          <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>
      </S.Form>
     
      <Footer/>
    </S.Container>
  
);
}

export default Task;
