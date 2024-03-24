import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footballlist from '../components/Footballlist'
import TodoList from '../components/TodoList'

const Routeer = () => {
  return (
    
   <Routes>
    <Route path='/' element={<Footballlist/>}/>
    <Route path='/todo_list' element={<TodoList/>}/>
   </Routes>

    
  )
}

export default Routeer