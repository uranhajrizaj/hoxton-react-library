import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div className="App">
     <Button onClick={()=>console.log('hello')}
     size="large"
     variant="primary"
      >Small</Button>
       <Button size="small" variant="tertiary">Medium</Button>
       <Button size="medium" variant="tertiary">Large</Button>
    </div>
  )
}

export default App
