import React,{useEffect} from 'react'
import { Button, Container } from 'reactstrap'

export default function Home() {

  useEffect(() =>{
    document.title = "Home"
  },[])
  return (
    <div>
   <div className='jumbotron text-center'>
    <h1 >My name is pratyush</h1>
    <p>
      made by me
    </p>
    <Container>
      <Button color='primary' outline>
        Strat Using my app
      </Button>
    </Container>

   </div>
   </div>
  )
}
