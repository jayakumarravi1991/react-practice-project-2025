import './App.css'
import Alerts from './components/Alerts/Alerts'
import Accordion from './components/Accordion/Accordion';
import {accordionContentOne, accordionContentTwo} from './data.jsx';

function App() {
  return (
    <>
      <h1 className='header-component'>React Sample Site</h1>
      <Alerts alertType="alert-primary">A simple primary alert—check it out!</Alerts>
      <Alerts alertType="alert-secondary">A simple primary alert—check it out!</Alerts>
      <Alerts alertType="alert-success">A simple primary alert—check it out!</Alerts>
      <section>
        <Accordion id="accordionExampleOne" accordionContent={accordionContentOne}></Accordion>
        <Accordion id="accordionExampleTwo" accordionContent={accordionContentTwo}></Accordion>
      </section>
    </>
  )
}

export default App
