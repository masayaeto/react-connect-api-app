import React from 'react'

function CountDisplay({name, count}) {
  console.log(`display : ${name}`)
  return (
    <div>
      {count}
    </div>
  )
}

export default React.memo(CountDisplay)
