import React, {useState, useEffect} from 'react';
import * as S from './styles';
import{Link, redirect} from 'react-router-dom';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//componentes
import Header from '../../components/header';
import Footer from '../../components/footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/taskCard';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const[tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
    .then(response =>{
        setTasks(response.data)
    })
  }

  function Notification(){
    setFilterActived('late');
  }

  useEffect(()=>{
    loadTasks();

    if(!isConnected){
      setRedirect(true);
    }
  }, [filterActived, loadTasks])

  return (
    <S.Container>
      {redirect && <Redirect to='/qrcode/'/>}
      <Header clickNotification={Notification}/>

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
        <FilterCard title="Todos" selected={filterActived === 'all'} />
        </button>

        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" selected={filterActived == 'today'}/>
        </button>

        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" selected={filterActived == 'week'}/>
        </button>

        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" selected={filterActived == 'month'}/>
        </button>

        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" selected={filterActived == 'year'}/>
        </button>

      </S.FilterArea>

      <S.Title>
        <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>  

      <S.Content>
        {
          tasks.map(t =>(
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/>
           </Link>
          ))
        }
        
      </S.Content>
      <Footer/>
    </S.Container>
  
);
}

export default Home;