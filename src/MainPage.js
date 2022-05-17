import React from 'react'
import './MainPage.css'
import mainImage from './images/project-bg.jpeg'
const MainPage = () => {
    return (

        <>
            <div className='container-fluid'>

                <div className='row'>

                    <div className='nav_bar'>



                        <div className='col-4'>

                            <span className='companyName'>ATG.</span>
                            <span className='companyNameEnd'>W</span>
                            <span className='companyName'>O</span>
                            <span className='companyNameEnd'>RLD</span>

                        </div>


                        <div className='col-4 search_bar' >

                            <i class="bi bi-search"></i>
                            <input placeholder='Search for your favorite groups in ATG'></input>

                        </div>

                        <div className='col-4 createAcc'>

                            <p>Create account. <a href='#'>It’s free!</a> <i class="bi bi-caret-down-fill"></i></p>

                        </div>

                    </div>

                </div>

                <div className='row'>
                    <div className='col-12 img-container'>

                        <img className='' src={mainImage} alt="" />
                        <h2>Computer Engineering</h2>
                        <p>142,765 Computer Engineers follow this</p>

                    </div>
                </div>

                <div className='row'>

                    <div className='action_bar'>

                        <div className='col-lg-4 col-sm-6 action_1'>
                            <ul>
                                <li id='all_post'>All posts(32)</li>
                                <li>Articles</li>
                                <li>Events</li>
                                <li>Education</li>
                                <li>Job</li>
                            </ul>
                        </div>
                        <div className='col-lg-4 col-sm-6 action_2'>
                            <button id='write_post_btn'>Write a post <i class="bi bi-caret-down-fill"> </i></button>
                            <button id='join_group_btn'>Join group <i class="bi bi-people-fill"></i> </button>
                        </div>

                    </div>
                    
                </div>
                
                <hr></hr>

                <div className='row'>

                    <div className='col-lg-5 feed' >

                    </div>

                    <div className='col-lg-3 sidebar'>

                    </div>



                </div>



            </div>


        </>

    )
}

export default MainPage