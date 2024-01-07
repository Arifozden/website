import React, { useContext } from 'react'
import { FooterContext } from '../context/FooterContext'
import { TodoContext } from '../context/TodoContext'

function Footer() {
  //context propsları
  const { todoList, setTodoList } = useContext(TodoContext)
  const { setFilter, todoLeft } = useContext(FooterContext)
  return (
    <>
      {/* todolist boş değilse footerı göster ve item sayısını ayarla */}
      {todoList.length > 0 ? (
        <div className="footer">
          <div className="filter" onClick={() => setFilter('active')}>
            <small>
              {todoLeft.length}
              {todoLeft.length === 1 ? ' item' : ' items'} left
            </small>
          </div>
          {/* filtreleme butonları */}
          <div className="btnContainer">
            <button className="filter" onClick={() => setFilter('all')}>
              All
            </button>
            <button className="filter" onClick={() => setFilter('active')}>
              Active
            </button>
            <button className="filter" onClick={() => setFilter('completed')}>
              Completed
            </button>
          </div>
          <div>
            <button className="filter" onClick={() => setTodoList([])}>
              Clear All
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Footer
