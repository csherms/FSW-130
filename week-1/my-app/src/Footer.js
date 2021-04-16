import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function Footer(props) {
     return (
          <ThemeContextConsumer>
               {context =>(
                    <div id="footer-container" className={`${context.theme}-theme`}>
                         <p>Email: meblahblah@gmail.com</p>
                         <p>Phone: 123-222-3333</p>  
                         <p>More Stuff: This is some more stuff...</p>   
                    </div>
               )}
          </ThemeContextConsumer>
               
          )
     }

export default Footer
