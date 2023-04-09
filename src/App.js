import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import NavBar from './components/NavBar';
import Cricket from './components/Cricket';
import FootBall from './components/FootBall';
import BasketBall from './components/BasketBall';
import ThrowBall from './components/ThrowBall';
import CricketScorecard from './components/CricketScorecard';
function App() {
  const [ game, setGame ] = useState('cricket')
  return (
    <div className="App">
     <MainNav></MainNav>
     <NavBar game={game} setGame={setGame}></NavBar>
     {
      game==='cricket' && <Cricket></Cricket>
     }
     {
      game==='football' && <FootBall></FootBall>
     }
     {
      game==='basketball' && <BasketBall></BasketBall>
     }
     {
      game==='throwball' && <ThrowBall></ThrowBall>
     }
     {/* <Home></Home> */}
    </div>
  );
}

export default App;
