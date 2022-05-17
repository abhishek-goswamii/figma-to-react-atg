import React from 'react'
import './posts.css'
const Posts = (props) => {
  return (

    <div className='box'>

      <img src={props.img}></img>

      <div className='details'>

        <p>{props.topic}</p>
        <h3>{props.heading}</h3>
        <p>{props.shortDescription}</p>

      </div>


      <div className='user_div'>

        <div className='user_details'>
          <img className='round_user_image' src={props.userImage}></img>
          <h3 className='name'>{props.name}</h3>
        </div>

        <div className='post_details'>
          <p> <i class="bi bi-eye"></i> {props.views} views  <i class="bi bi-share"></i></p>
        </div>


      </div>

    </div>

  )
}

export default Posts