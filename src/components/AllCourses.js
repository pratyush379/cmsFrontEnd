import React, { useEffect, useState } from 'react'
import Course from './Course'
import { Button } from 'reactstrap'


import base_url from '../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function AllCourses() {
 

useEffect(() =>{
  document.title ="All Courses"
},[])

//function to get all courses from server:
const getAllCoursesFromServer = () =>{
  axios.get(`${base_url}/courses`).then(
    (response) =>{
      //success
     // console.log(response);
     console.log(response.data);
     toast.success('courses loaded',{
      position:"bottom-center"
     })
     setCourses(response.data)
    },
    (error)=>{
      //error
      console.log(error);
      toast.error('something went wrong')
    }
  );
};

//calling loading course function
useEffect(() =>{
  getAllCoursesFromServer()
},[])
 
const [courses,setCourses] = useState([])
  
//function to be called when in course.js we delete a course by id
//it is passed as props to Course Componenent
const updateCourses = (id) =>{
  setCourses(courses.filter((c)=>c.id!=id))
} 
return (
    <div>
      {/* <Button onClick={() =>{
        console.log('test')
       
        setCourses([
          ...courses,
          {
            title:"java" ,
          description:"this is java",
        },
        ]);
      }}></Button> */}
      
        <h1>All Courses</h1>
        <p>List of Courses are as follow:</p>
        {
            courses.length > 0 ? courses.map((item)=>
            <Course key={item.id} course={item} update={updateCourses}/>
             ) : "no course"
        }
    </div>
  )
}
