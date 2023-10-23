import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css'

const Home = () => {
  return <>
    <h1>Home</h1>
    <Button variant="primary" id="login" href={import.meta.env.VITE_LOGIN}>Portal Login</Button>
  </>
}

export default Home