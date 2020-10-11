import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import './App.css'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Form} />
        </Switch> */}
        Hey this is mern blog...
      </div>
    </BrowserRouter>
  )
}

export default App