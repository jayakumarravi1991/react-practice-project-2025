import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alerts from './components/Alerts/Alerts'
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <>
      <h1 className='header-component'>React Sample Site</h1>
      <Alerts alertType="alert-primary">A simple primary alert—check it out!</Alerts>
      <Alerts alertType="alert-secondary">A simple primary alert—check it out!</Alerts>
      <Alerts alertType="alert-success">A simple primary alert—check it out!</Alerts>
      <section>
        <Accordion id="accordionExampleOne"></Accordion>
      </section>
    </>
  )
}

export default App
