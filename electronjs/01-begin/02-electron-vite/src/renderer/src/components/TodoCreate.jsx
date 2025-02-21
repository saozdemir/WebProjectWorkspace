import React, { useState } from 'react'
import '../assets/style/Todo.css'

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('')

  //? Yeni kayıdı
  const createTodo = () => {
    if (!newTodo) {
      return
    }
    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo
    }
    //! Aşağıdaki fonksiyon parent (App.jsx) componentinde tanımlanmış bir fonksiyondur.
    //! Biz bunu props olarak alıp kullandık.
    onCreateTodo(request) //! Parent componente yeni todo yu gönderiyoruz.
    clearInput()
  }

  const clearInput = () => {
    setNewTodo('')
  }

  return (
    <div className={'todo-create'}>
      <input
        type="text"
        className={'todo-input'}
        placeholder={'Todo giriniz'}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className={'todo-create-button'} onClick={createTodo}>
        Todo Oluştur
      </button>
    </div>
  )
}

export default TodoCreate
