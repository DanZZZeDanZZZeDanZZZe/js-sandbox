import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/Header'
import Dictionary from './components/Dictionary'
import Borard from './components/Board'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Dictionary/>
        </Route>
        <Route path="/add-word">
          <Borard/>
        </Route>
        <Route path="/profile">
        </Route>
        <Route path="/about">
        </Route>
      </Switch>
    </Router>
  )
}

export default App
