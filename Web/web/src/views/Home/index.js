import React, {useState} from 'react';
import * as S from './styles';
//componentes
import Header from '../../components/header';
import Footer from '../../components/footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/taskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('today');


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
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </S.Content>
      <Footer/>
    </S.Container>
  
);
}

export default Home;
