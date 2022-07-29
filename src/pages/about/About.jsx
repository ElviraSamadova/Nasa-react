import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div>
       <div className="about-box">
        <h5>About NASA</h5>
        <p>The National Aeronautics and Space Administration is America’s civil space program and the global leader in space exploration. The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S. contractors, academia, and international and commercial partners to explore, discover, and expand knowledge for the benefit of humanity. With an annual budget of $23.2 billion in Fiscal Year 2021, which is less than 0.5% of the overall U.S. federal budget, NASA supports more than 312,000 jobs across the United States, generating more than $64.3 billion in total economic output. </p>
       </div>
       <div className="images">
        <div className="container  d-flex">
        <div className="col-3 box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4Q0wT5WN2Nv6E7Gu-visWrkb-bWbo41UYnvO7x5LYYi88Inn5vOacxwKLMVLyJ4qoQ&usqp=CAU" alt="about-nasa" />
       </div>
       <div className=" col-3 box">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QNhwMcyofhw983C3_jTun-jpBpTA67-ZWw&usqp=CAU" alt="the future is now" />
       </div>

       <div className="col-3 box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GttlpQLUE6gj64d9KneS2GXNB6h44rIbTj3mJFNpLvzaL_DdGGXXHni5r9BL_bl7xyU&usqp=CAU" alt="" />
       </div>

       <div className="col-3 box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4Q0wT5WN2Nv6E7Gu-visWrkb-bWbo41UYnvO7x5LYYi88Inn5vOacxwKLMVLyJ4qoQ&usqp=CAU" alt="about-nasa" />
       </div>
        </div>
      
       
       </div>
    </div>
  )
}

export default About
