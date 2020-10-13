import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import './App.css'
import Nav from './components/partials/Nav'
import Blog from './components/Blog'
import newPost from './components/newPost'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/post" component={newPost} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App