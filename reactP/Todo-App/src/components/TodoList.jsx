import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext'
import { FaRegTrashAlt, FaPencilAlt, FaSave } from 'react-icons/fa'
import '../App.css'
import { FooterContext } from '../context/FooterContext'

function TodoList() {
  const {
    todoList,
    setTodoList,
    deleteTodo,
    completedTodo,
    editTodo,
    newContent,
    setNewContent,
    savedTodo,
  } = useContext(TodoContext)

  const { filtered } = useContext(FooterContext)

  //storegaya veri ekleme ve veriyi çekme işlemi
  useEffect(() => {
    const storedList = localStorage.getItem('todo')
    if (storedList) {
      setTodoList(JSON.parse(storedList))
    }
    //console.log(storedList)
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <h3 className="header">{todoList.length > 0 && 'List'}</h3>

      {/* filtered = todolist ataması yaptım ve filtreleme işlemine göre mapleme yapıyorum */}

      {filtered.map((todo) => (
        <div key={todo.id} className="list">
          <div
            className={todo.isCompleted ? 'todo completed' : 'todo'}
            onClick={() => completedTodo(todo.id)}
          >
            {todo.isEditable && !todo.isCompleted ? (
              <input
                className="edit-input"
                placeholder={todo.text}
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            ) : (
              todo.text
            )}
          </div>
          <div className="icons">
            {todo.isEditable && !todo.isCompleted ? (
              <button className="btn save" onClick={() => savedTodo(todo.id)}>
                <FaSave />
              </button>
            ) : (
              <>
                <button className="btn edit" onClick={() => editTodo(todo.id)}>
                  <FaPencilAlt />
                </button>
                <button
                  className="btn delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaRegTrashAlt />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default TodoList
