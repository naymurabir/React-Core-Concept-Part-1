import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

import Actors from './Actors'
import Singers from './Singers'
import BookStore from './BookStore'



function App() {

  const actors = ['Ananto Jalil', 'Rubel', 'Arfan Nisho', 'Arefin Shuvo']

  const singers = [
    { id: 1, name: 'Mahfuzur Rahman', age: 65 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Asif Akbar', age: 45 },
    { id: 4, name: 'Pritom Hasan', age: 30 }
  ]

  const booksArr = [
    { id: 1, name: 'Physics', price: 100 },
    { id: 2, name: 'Chemistry', price: 120 },
    { id: 3, name: 'Biology', price: 130 },
    { id: 4, name: 'Mathematics', price: 150 },
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={booksArr}></BookStore>


      <Actors name="Shakib Khan"></Actors>
      {
        actors.map(actor => <Actors name={actor}></Actors>)
      }

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      <Todo
        task="Learn React"
        isDone={true}>
      </Todo>

      <Todo
        task="Core Concepts"
        isDone={false}>
      </Todo>

      <Todo
        task="Learn JSX"
        isDone={true}>
      </Todo>


      <Myself></Myself>
      <MyGadgets></MyGadgets>
      <Student></Student>

      <Device name="Laptop" price={52000}></Device>
      <Device name="Phone" price={50000}></Device>
      <Device name="Watch" price={3000}></Device>

      <Person name="Rakib" grade={7} score={95}></Person>
      <Person name="Shohan" grade={8} score={93}></Person>
      <Person name="Shobuj" grade={9} score={88}></Person>
      <Person></Person>
    </>
  )
}

// Function-5 using Destructing
const { name, grade, score } = { name: 'Rakib', grade: 7, score: 95 }
console.log(name, grade, score);

function Person({ name = 'Shojib', grade = '10', score = '98' }) {
  return (
    <div className='person'>
      <h3>Name: {name}</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

// Function-4 using Props
function Device(props) {
  return <h3 className='device'>This is my {props.name}. Which price is {props.price}. </h3>
}

// Function-1
function Myself() {
  const name = 'Abir'
  const age = 25
  const hobby = 'coding'
  return <h3 style={{ border: '2px solid red', padding: '5px' }}>I am {name}. I am {age} years old. My hobby is {hobby}</h3>
}

// Function-2
function MyGadgets() {
  const MyGadgetsStyle = {
    border: '2px solid yellow',
    borderRadius: '10px',
    padding: '15px',
    margin: '20px',
    backgroundColor: 'purple'
  }

  const laptop = {
    brand: 'hp',
    color: 'black',
    price: 55000,
    generation: '7th'
  }
  const phone = {
    brand: 'iPhone-11',
    color: 'black',
    price: 90000,
  }

  return (
    <div style={MyGadgetsStyle}>
      <h4> The name of my laptop is {laptop.brand}. Which color is {laptop.color}. Price is {laptop.price}. Generation is {laptop.generation}.</h4>
      <p>Phone is {phone.brand}. Color is {phone.color}. Price is {phone.color}.</p>
    </div>
  )
}

// Function-3
function Student() {
  return (
    <div className='student'>
      <h4 className='name'>Name: Kodom Ali</h4>
      <h4>Age:12 </h4>
      <h4>Study: Class-10</h4>
    </div>
  )
}

export default App
