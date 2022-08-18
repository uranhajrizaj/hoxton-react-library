
import './App.css'
import { Button } from './components/Button'
import { CheckboxGroup } from './components/CheckboxGroup'
import { Input } from './components/Input'
import { OnSelect } from './components/OnSelect'

function App() {

  return (
    <div className="App">
       
       <form onSubmit={event=>{
        event.preventDefault()

        let cars= OnSelect({name:"cars"})
        console.log(cars)

        let colors= OnSelect({name:"colors"})
        console.log(`color:${colors}`)

        

       }}>
       <CheckboxGroup size="medium" question="What is your favourite color?" type="radio" options={["red","blue","orange"]} name="colors"></CheckboxGroup>
       <CheckboxGroup size="medium" question="What is your favourite car?" type="checkbox" options={["Tesla","BMW"," Mercedes "]} name="cars"></CheckboxGroup>
       <Input question={"What is your name"}  name="text" ></Input>
       <Button size="medium" variant="tertiary">Submit</Button>

       
       </form>
    </div>
    
  )
}

export default App
