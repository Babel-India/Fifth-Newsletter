import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
      <div id="games" className="games-news">
      <h1 className='game-head'>to the world of games</h1>
      
           <div className="game-1">
               <h2 className='game-name'>Halo Infinite</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Halo.jpg").default } />
                Bearing a curious new sub-header and running on a brand new game engine known as Slipspace,
                the first Halo Infinite trailer almost seems to suggest that Master Chief's next adventure will have MMO qualities to it, or at least be more open-ended and sandbox-like in flavour. That instantly familiar shot of his armour also teases a potential technological downgrade for everyone's favourite Spartan, though plot details remain threadbare for now. 
                MMO or otherwise, Halo: Infinite could just be the Halo comeback we've all been waiting for. 
              </p>
              <p> Platform's: PC, Xbox One, Xbox Series X</p>
              <p>Release date: December 8, 2021</p>
           </div>
           <div className="game-1">
               <h2 className='game-name'>Chorus </h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/Chorus.jpg").default } />
                In Chorus, a brand new space-flight combat shooter, you play as Nara and Forsaken, her sentient starfighter. 
                Taking the genre straight into the next-generation of consoles, Chorus looks pretty awesome, melding 
                exploration across the universe with outgunning your enemies in an epic quest to free an oppressed galaxy.  
              </p>
              <p> Platform's: Xbox Series X, Xbox One </p>
              <p>Release date: December 3, 2021</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>Pokemon Legends: Arceus</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Pokemon.jpg").default } />
                The first open-world Pokemon game ever, Pokemon Legends: Arceus has undoubtedly caused quite the commotion in the fandom. 
                Set long before any of the series entries to date, you'll be exploring Sinnoh in a unique adventure to create the region's first Pokedex. 
                Catching Pokemon will be as simple as throwing a Pokeball at them whilst creeping towards them out in the open, which will seamlessly enter you into a battle.
                It's the Pokemon game we've all been dreaming of. 
              </p>
              <p> Platform's: Nintendo Switch </p>
              <p>Release date: January 28, 2022</p>
           </div>   
           <div className="game-1">
               <h2 className='game-name'>Rainbow Six Extraction</h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/Rainbow-Six-Extraction.jpg").default } />
                Formerly known as Rainbow Six Quarantine, we're now looking at Rainbow Six Extraction - the name changed for very good reasons of course. 
                This is a spin-off from Rainbow Six Siege, 
                offering similar co-operative multiplayer action where you must work with your squad to combat and defeat a type of parasite-esque alien called the Archaeans.
              </p>
              <p> Platform's: PS4, PS5, Xbox Series X, Xbox One, PC, Google Stadia, Amazon Luna </p>
              <p>Release date: January 2022</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>Dying Light 2 </h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Dying-Light-2.jpg").default } />
                No calendar is complete without a zombie game or two on the horizon, and Dying Light 2 has a good chance of 
                being the only zombie game you'll need for the foreseeable future. Techland got off to fantastic start 
                with the original Dying Light in 2015, and its sequel intends to healthily expand those parameters in every 
                regard. With its reactive world, branching narrative, finessed combat, and radically upgraded visuals, 
                Dying Light 2 is everything you could hope for in one, beautifully apocalyptic package, 
                and then some. Our barbed wire baseball bats are already prepared and eager for zombie blood.
              </p>
              <p> Platform's: PC, PS4, Xbox One </p>
              <p>Release date: February 4, 2022</p>
           </div>           
  </div>
    )
}

export default Games;

// const Games = () => {
//   return(

// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/DOTA.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO 2.jpg"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO.jpg"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// )
// }

// export default Games;