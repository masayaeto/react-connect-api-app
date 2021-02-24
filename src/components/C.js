import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const C = () => {
  const v = useContext(AppContext)

  return (
    <div>
      <h3>C</h3>
      {v}
    </div>
  )
}

export default C
