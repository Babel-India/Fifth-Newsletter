import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import "./Styles/BSTC.css"
import video1 from "../Images/Videos/Dance.mp4"

function Video(){
    return(
        <div id="experts">
            <h1 className='video-head'> Fun Corner</h1>
            <Container>
                    <video className = "vimmy"  src={video1} controls='controls' width='65%' height='40%' autoPlay='false' />
            </Container>
        </div>
    )
}
export default Video;