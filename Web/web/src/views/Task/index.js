import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';
//componentes
import Header from '../../components/header';
import Footer from '../../components/footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';


function Task() {
    const [lateCount,setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId]= useState();
    const [done, setDone]= useState(false);
    const [title, setTitle]= useState();
    const [description, setDescription]= useState();
    const [date, setDate]= useState();
    const [hour, setHour]= useState();
    const [macaddress, setMacaddress]= useState('1B:44:11:3A:B7');
  

  async function LateVerify(){
    await api.get(`/task/filter/late/00:1B:44:11:3A:B7`)
    .then(response =>{
        setLateCount(response.data.length)
    })
  }

  async function Save(){
    await api.post('/task',{
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(() =>
      alert('TAREFA CADASTRADA COM SUCESSO!')
    )
  }

  useEffect(()=>{
    LateVerify();
  }, [])

  return (
    <S.Container>
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
