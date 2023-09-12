import React from 'react'
import { Link } from 'react-router-dom';
import
{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
}
from
'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';


   
export default function Course({course , update}) {
    
//delete course function
const deleteCourse = (id) =>{
   axios.delete(`${base_url}/courses/${id}`).then(
    (response)=>{
    toast.success("course deleted")
    update(id)
    },(error)=>{
    toast.error("server issue")
    }
   )
    }
  
    return (
   <Card>
    <CardBody>
        <CardTitle className='text-center'>Course id : {course.id}</CardTitle>
        <CardSubtitle className='text-center'>{course.title}</CardSubtitle>
        <CardText className='text-center'>{course.description}</CardText>
        <Container className="text-center">
            <Button color='danger' className = 'mx-3' onClick={()=>
            deleteCourse(course.id)} >Delete</Button>
            {/* <Button color='warning' >Update</Button> */}
            <Link className='btn btn-info' to={`/edit-course/${course.id}`}>Update</Link>
            
        </Container>
    </CardBody>
   </Card>
  )
            }
            