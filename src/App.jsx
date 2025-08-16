import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
//Helloworld
export function App () {

  return(
    <section className='App'>

    <TwitterFollowCard 
    isFollowing 
    username = {"lulu"} > 
    Lucy
    </TwitterFollowCard>

    <TwitterFollowCard
    isFollowing={false} 
    username={"multuk"} > 
    Juan Diego
    </TwitterFollowCard>

    <TwitterFollowCard 
    isFollowing 
    username={"espacio relamadri"} >
    Luis D Rodriguez
    </TwitterFollowCard>
    </section> 

  )
}
