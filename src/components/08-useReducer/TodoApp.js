import React, {useReducer} from 'react'
import './styles.css'
export const TodoApp = () => {


    const [state, dispatch] = useReducer(first, second, third)

  return (
    <div>
        <h1>TodoApp</h1>
        <hr />

        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>

        </ul>




    </div>
  )
}
