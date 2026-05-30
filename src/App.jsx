import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    const value = text.trim()
    if (!value) return
    setTodos((prev) => [...prev, value])
    setText('')
  }

  return (
    <main className="app">
      <h1>React работает! 🎉</h1>

      <section className="card">
        <h2>Счётчик</h2>
        <button onClick={() => setCount((c) => c + 1)}>
          Нажато раз: {count}
        </button>
      </section>

      <section className="card">
        <h2>Список задач</h2>
        <div className="row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Введите задачу..."
          />
          <button onClick={addTodo}>Добавить</button>
        </div>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
        {todos.length === 0 && <p className="muted">Пока пусто</p>}
      </section>
    </main>
  )
}

export default App
