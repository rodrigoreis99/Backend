import React, {useState, useEffect} from 'react';
import * as S from './styles';
import api from '../../services/api';
//componentes
import Header from '../../components/header';
import Footer from '../../components/footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/taskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const[tasks, setTasks] = useState([]);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/00:1B:44:11:3A:B7`)
    .then(response =>{
        setTasks(response.data)
        console.log(response.data)
    })
  }

  useEffect(()=>{
    loadTasks();
  }, [filterActived])

  return (
    <S.Container>
      <Header/>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
        <FilterCard title="Todos" selected={filterActived == 'all'} />
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
        <h3>Tarefas</h3>
      </S.Title>  

      <S.Content>
        {
          tasks.map(t =>(
           <TaskCard type={t.type} title={t.title} when={t.when}/>
          ))
        }
        
      </S.Content>
      <Footer/>
    </S.Container>
  
);
}

export default Home;
