import axios from 'axios'
import React, { Fragment,useEffect, useState } from 'react'
import { Form, FormGroup, label , Input, Container, Button } from 'reactstrap'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddCourse() {
   useEffect (() =>{
      document.title = "Add Courses"
     
    },[])

    const navigate = useNavigate()
    
    const [course,setCourses] = useState([{}])

    
    //form handle function
    const handleForm = (e) =>{
      e.preventDefault()
     postDataOnServer(course)
      console.log(course)
   }

   const {id} = useParams(); 

   //creating function to post data on server
   const postDataOnServer = (data)=>{
      if(id){
         //if id is present in url
         //then update function
         axios.put(`${base_url}/courses`,data).then(
         );
         if(id!= data.id){
            toast.success("course added successfully",{
               position:"bottom-center"
            })
            navigate('/view-courses')
         }
         else{
         toast.success("course updated successfully",{
            position:"bottom-center"
         })}
         
      }
      else{
       //if no id in url
       //then create function
      
      axios.post(`${base_url}/courses`,data).then(
         (response)=>{
            //success
            
            console.log("success")
            toast.success("course added successfully",{
               position:"bottom-center"
            })
            navigate('/view-courses')
         },(error)=>{
            //error
            console.log("error")
            toast.error("something went wrong",{
               position:"bottom-center"
            })
         }
      )
   }
}

useEffect(() =>{
   if(id){
   axios.get(`${base_url}/courses/${id}`).then(
      (response)=>{

         console.log(response)
         setCourses({...course,id:response.data.id ,title:response.data.title,description:response.data.description})
      },(error)=>{
          console.log('error')
      }
   );}
 },[])
  

 const title = () =>{
   if(id){ //if id in url then show update option
       return <h2 className='text-center'>Update Employee</h2>
   }
   else{ //else add option
       return <h2 className='text-center'>Add Employee</h2>
   }
}

  return (
  
     
        <Fragment>
        {
        title()
        }
    
     <Form onSubmit={handleForm} >
        <FormGroup>
         <label htmlFor='userId'>Course Id</label>
         <Input type="text" placeholder="enter here" id="userId" 
         value={course.id || ''}
         onChange={(e)=>{
            setCourses({...course,id:e.target.value})
         }}></Input>
        </FormGroup>
        <FormGroup>
         <label htmlFor='title'>Course Title</label>
         <Input type="text" placeholder="enter title  here" id="title" 
         value={course.title || ''}
          onChange={(e)=>{
            setCourses({...course,title:e.target.value})
         }}></Input>
        </FormGroup>
        <FormGroup>
         <label htmlFor='description'>Course Title</label>
         <Input type="textarea" placeholder="enter description here" id="description" 
         value={course.description || ''}
         style={{height:'150px'}}
         onChange={(e)=>{
            setCourses({...course,description:e.target.value})
         }}></Input>
        </FormGroup>
        <Container className='text-center'>
            <Button type='submit' color='success mx-2'  >Add Course</Button>
            <Button color='warning' type='reset' >Clear</Button>
        </Container>
     </Form>
     </Fragment>
    
  )
}
