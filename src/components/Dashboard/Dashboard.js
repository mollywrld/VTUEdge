import React from 'react'
import Study from '../../assets/studyguide.svg'
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className='header'>
                <div className='header-text'>
                    <a className='head-bold'>Welcome to VTUEdge!</a><br /><a className='head-desc'>We are your one-stop destination for comprehensive study resources.<br/> Discover a vast collection of materials ranging from textbooks, lecture notes, practice exams,<br/> and interactive study guides.</a>
                </div>
                <div className='header-svg'>
                    <img src={Study} alt="SVG" />
                </div>
            </div>
            <div className='subjects-banner'>
                <div className='head-subjects'>
                    <div className='subjects'>
                        <a className='math'>Math</a>
                        <a className='math'>Physics</a>
                        <a className='math'>Chem</a>
                        <a className='math'>CSE</a>
                        <a className='math'>IT</a>
                        <a className='math'>ECE</a>
                        <a className='math'>EEE</a>
                        <a className='math'>Mech</a>
                        <a className='math'>Civil</a>
                        <a className='math'>AI</a>
                        <a className='math'>Data<br/>science</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard