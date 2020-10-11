import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import './App.css'
import Nav from './components/Nav'
import Blog from './components/Blog'
import Post from './components/Post'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App