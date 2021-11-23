import React from 'react'
import { Link } from 'react-router-dom'
import SplashBackground from '../components/splash-background'

const SplashHeight = 690

const Home = () => (
  <>
    <SplashBackground height={SplashHeight}>
      {/* TODO: replace this with image */}
      <h2 className="flex flex-col text-4xl md:text-5xl lg:text-6xl text-gray-text-title font-display font-bold tracking-tighter">
        SIGGRAPH
        <span className="inline-block">
          UPENN
        </span>
      </h2>
      <p className="text-base lg:text-xl text-base font-display text-gray-text-subtitle mt-2">
        Filler text! What will possibly go here.
      </p>
    </SplashBackground>
  </>
)

export default Home
