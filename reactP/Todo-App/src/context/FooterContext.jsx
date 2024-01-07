import React, { createContext, useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

export const FooterContext = createContext()
export const FooterProvider = ({ children }) => {
  //diğer contextten liste aktarımı
  const { todoList } = useContext(TodoContext)

  //states
  const [filter, setFilter] = useState('all')

  //kalan todo sayısını belirleme
  const todoLeft = todoList.filter((todo) => !todo.isCompleted)

  //filtreleme işlemleri
  let filtered = todoList
  if (filter !== 'all') {
    filtered = todoList.filter((todo) =>
      filter === 'active' ? !todo.isCompleted && todo : todo.isCompleted && todo
    )
  }

  //context propsları
  const values = {
    todoLeft,
    setFilter,
    filtered,
  }
  return (
    <FooterContext.Provider value={values}> {children} </FooterContext.Provider>
  )
}
