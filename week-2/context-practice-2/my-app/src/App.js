import React from 'react'
import './app.css'
import Header from './Header'
import MovieForm from './MovieForm'
import MovieList from './MovieList'

function App() {
     return (
          <div>
               <Header />
               <MovieForm />
               <MovieList />
          </div>
     )
}

export default App
