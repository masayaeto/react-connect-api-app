import React, {useState} from 'react'

const initialState = {
  name: "",
  price: ""
}

const Basic1 = () => {
  const [product, setProducts] = useState(initialState)
  return (
    <div>
      <form>
        <input type="text" value={product.name} onChange={evt => setProducts({...product, name: evt.target.value})}/>
        <input type="text" value={product.price} onChange={evt => setProducts({...product, price: evt.target.value})}/>
      </form>
      <h1>product name is {product.name}</h1>
      <h1>product price is {product.price}</h1>
      <div></div>
    </div>
  )

}

export default Basic1
