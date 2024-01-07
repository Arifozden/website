import React from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import { FooterProvider } from './context/FooterContext'

function App() {
  return (
    <div className="App">
      <h1 className="header">ToDo App</h1>
      <TodoProvider>
        <FooterProvider>
        <FormTodo />
        <TodoList />
          <Footer />
        </FooterProvider>
      </TodoProvider>
    </div>
  )
}

export default App
