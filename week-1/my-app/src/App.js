import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import Button from './Button'
import './app.css'


export class App extends Component {
     render() {
          return (
               <div>
                    <Navbar />
                    <Main />
                    <Button />
                    <Footer />
               </div>
          )
     }
}

export default App

