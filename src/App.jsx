import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://imgcdn.stablediffusionweb.com/2024/9/9/1972d15d-db61-41a6-8a8b-b6df9b81008d.jpg',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://cdnb.artstation.com/p/assets/images/images/004/878/773/large/ariel-toledo-peluso-scavenger-concept.jpg?1486939574',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://i.pinimg.com/236x/09/13/17/091317d667cba5003d6dfa49b1d62c77.jpg',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/778e2910-9de3-4bf7-d887-555f3cb3b300/avatarhd',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://files.idyllic.app/files/static/2350390?width=640&optimizer=image',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://preview.redd.it/combat-medic-eule-v0-zc33roc2gmxc1.png?auto=webp&s=75b81359c180314bb20e640a0da5ee59cf07d66a',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://masterpiecer-images.s3.yandex.net/481a8adf73bd11eebad3b646b2a0ffc1:upscaled',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://i.pinimg.com/236x/89/21/3a/89213a42559ec7fb6c83b4bfcc4f9d48.jpg',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/642688443905844295/b24b5287-0e14-47cb-bb17-47b228f41b14.png',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://i.pinimg.com/236x/35/47/40/354740f197f7f815d65ad429be2aa4b8.jpg',
    },
  ];

  const updateTotals = (teamArray) => {
    const strength = teamArray.reduce((sum, fighter) => sum + fighter.strength, 0);
    const agility = teamArray.reduce((sum, fighter) => sum + fighter.agility, 0);
    setTotalStrength(strength);
    setTotalAgility(agility);
  };

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = [...team, fighter];
      setTeam(newTeam);
      setMoney(money - fighter.price);
      updateTotals(newTeam);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    const newTeam = team.filter((_, i) => i !== index);
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
    updateTotals(newTeam);
  };

  return (
    <>
    <div>
      <div className='head'>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h3>Total Team Strength: {totalStrength}</h3>
      <h3>Total Team Agility: {totalAgility}</h3>

      <h2> Team:</h2>
      {team.length === 0 ? (
        <p>Pick Your Fighters ⚔️</p>
      ) : (
        <ul>
          {team.map((fighter, index) => (
            <li key={index} >
              <img src={fighter.img} alt={fighter.name} width="50" />
              <div >
                <p>
                  {fighter.name} - Price: ${fighter.price}, Strength: {fighter.strength}, Agility: {fighter.agility}
                </p>
                <button onClick={() => handleRemoveFighter(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>Available Zombie Fighters:</h2>
      </div>
      <ul >
        {zombieFighters.map((fighter, index) => (
          <div className='list'>
          <li 
            key={index}
          >
            <img src={fighter.img} alt={fighter.name} width="100" />
            <h4>{fighter.name}</h4>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
          </div>
        ))}
      </ul>
    </div>
    </>
  );
};

export default App;
