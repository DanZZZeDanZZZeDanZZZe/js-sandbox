import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
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
