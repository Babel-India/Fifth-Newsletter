import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
        <div id="games" className="games-news">
            <h1 className='game-head'>BABEL GAMING TOURNAMENT</h1>
            
                 <div className='tournament'>
                     <h2 className='game-name'>Counter Strike</h2>
                    <p className="game-des">
                      <img alt='game' className="tournament-img" src={ require('../Images/Games/CSGO.jpg').default } />
                    </p>
                 </div>
                 <div className='tournament'>
                     <h2 className='game-name'>CS GO: TEAM FULL DETAILS </h2>
                    <p className="game-des">
                      <img alt='game' className="tournament-img" src={ require('../Images/Games/CSGO1.jpg').default } />
                    </p>
                 </div> 
                 <div className='tournament'>
                     <h2 className='game-name'>CS GO: TOURNAMENT MATCH FIXTURES</h2>
                    <p className="game-des">
                      <img alt='game' className="tournament-img" src={ require('../Images/Games/CSGO2.jpg').default } />
                    </p>
                 </div>                   
        </div>
    )
}

export default Games;