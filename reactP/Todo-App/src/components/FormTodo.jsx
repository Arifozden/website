import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext'

function FormTodo() {
  const { content, setContent, addTodo, inputRef } = useContext(TodoContext)

  //inputa focus
  useEffect(() => {
    inputRef.current.focus()
  }, [content])

  //Yeni todo oluşturma
  return (
    <form onSubmit={() => addTodo(event, content)}>
      <input
        type="text"
        placeholder="What are you planning to do today? "
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" disabled={!content} className="btn add">
        Add
      </button>
    </form>
  )
}

export default FormTodo
