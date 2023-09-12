import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link  } from 'react-router-dom'
export default function Menus() {
  return (
    <div>
        <ListGroup>
            <Link className='list-group-item list-group-item-action' tag='a' to='/'>Home</Link>
            <Link className='list-group-item list-group-item-action'  tag='a' to='/view-courses'>View Courses</Link>
            <Link className='list-group-item list-group-item-action'  tag='a' to='/add-courses'>Add Courses</Link>
            <Link className='list-group-item list-group-item-action' tag='a' to='/about'>About Us</Link>
            <Link className='list-group-item list-group-item-action' tag='a' to='/contact'>Contact Us</Link>
        </ListGroup>

    </div>
  )
}
