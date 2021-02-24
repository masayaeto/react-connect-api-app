import React from 'react'

function CountClick({handleClick, children}) {
  console.log("Clicked", children)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(CountClick)
