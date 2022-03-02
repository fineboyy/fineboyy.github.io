import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Services from './Services'

export class Main extends Component {
  render() {
    return (
      <main id='main' className='Main'>
          <About />
          <Portfolio />
          <Services />
          <Contact />

      </main>
    )
  }
}

export default Main