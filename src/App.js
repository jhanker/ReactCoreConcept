import React, {useEffect, useState} from 'react'; 
import logo from './logo.svg';

import './App.css';

function App() {
  const nayoks= ['Anowar', 'jafar ikbal', 'salman sah', 'alamgir']
  const products = [
    {name: 'Photoshop', price:'$99.99'},
    {name: 'illustrator', price: '$60.99'}
]
const nayokNames = nayoks.map(nayok => nayok)
console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
     <p> I am a react parson</p>
     <Counter></Counter>
     <Users></Users>
     <ul>
       {nayoks.map(nayok => <li>{nayok}</li>)}
       {products.map(product => <li>{product.name}</li>)}

       <li>
         {nayoks[0]}

       </li>
       <li>
         {nayoks[1]}
         
       </li>
       <li>{nayoks[2]}</li>
       <li>{nayoks[3]}</li>
     </ul>
     {products.map(pd => <Product product={pd}></Product>)}
     
     
      </header>
    
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
    
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>{
          users.map(user => <li>{user.name}</li>)
          }</ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray ',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = {name: 'Photoshop', price:'$99.99'};
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3> {price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border: '2px solid gold', width: '400px' , margin:'10px'}}>
      <h3>My Name:{props.name} </h3>
      <p>My Propretion:{props.job}</p>
    </div>
  )
}

export default App;
