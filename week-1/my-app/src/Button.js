import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function Button(props) {
     return (
          <ThemeContextConsumer>
               {context =>(
                    <div id="button-container">
                         <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Toggle Theme</button>
                    </div>
               )}
          </ThemeContextConsumer>
          
     )
}

export default Button


