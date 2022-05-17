import React, { useState } from 'react';

import './styles/Global.ts';
import { Main } from './styles/App';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/Global';
import { TaskForm } from './components/Formulario/TaskForm';
import { TaskList } from './components/TaskL/TaskLista';
import {ITask} from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )

  }

  return (
    <>
  
  <GlobalStyle/>
  
  

   <Header/>
   
  
  <Main>
  <h2>O que voce vai fazer ?</h2>
  <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>

  <TaskList taskList={taskList} handleDelete={deleteTask}/>
  </Main>
  <Footer/>
  
    </>
   
  );
}

export default App;
