import React, {useState, useMemo} from 'react'

function Memo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0) 

  const AddCount1 = () => {
    setCount1(provCount1 => provCount1 + 1)
  }

  const AddCount2 = () => {
    setCount2(provCount2 => provCount2 + 1)
  }

  const isOdd = useMemo(() => {
    let i = 0
    while(i < 500000000){
      i++
    }
    return count1 % 2 !== 0
  },[count1])

  return (
    <div>
      <button onClick={AddCount1}>Count1 : {count1}</button>
      <span>{isOdd ? "奇数です" : "偶数です"}</span>
      <button onClick={AddCount2}>Count1 : {count2}</button>
    </div>
  )
}

export default Memo
