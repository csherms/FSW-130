import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function Navbar(props) {
     return (
          <ThemeContextConsumer>
               {context =>(
                    <div>
                         <header className={`${context.theme}-theme`}>
                              <ul className="nav-list">
                                   <li>Home</li>
                                   <li>About</li>
                                   <li>Contact</li>
                              </ul>
                         </header>
                    </div>
               )}
          </ThemeContextConsumer>
     )
}

export default Navbar
