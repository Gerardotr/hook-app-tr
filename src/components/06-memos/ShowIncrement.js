import React, {memo} from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log('Me volvi a ajecutar')
  return (
    <button onClick={() => {increment(5)}} className='btn btn-primary'>
        Incrementar
    </button>
  )
})
