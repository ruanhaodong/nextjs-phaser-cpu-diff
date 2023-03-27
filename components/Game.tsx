'use client';
import React, { useEffect } from 'react'
import { Example } from './test-scene';

const Game = () => {
    useEffect(() => {
        const config = {
          type: Phaser.AUTO,
          pixelArt: true,
          render: {
            pixelArt: true,
          },
          width: 432,
          height: 528,
          scale: {
            mode: Phaser.Scale.ENVELOP,
            autoRound: true,
          },
        
          physics: { default: 'arcade', arcade: { gravity: { y: 0 } } },
          scene: [Example],
        };
        const game = new Phaser.Game(config)
        return () => {
          game.destroy(true)
        }
      },[])
  return (
    <div>

    </div>
  )
}


export default Game;