import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Frame1ThumbJoey from './views/frame1-thumb-joey'
import Frame1ThumbJoey1 from './views/frame1-thumb-joey1'
import Frame1ThumbJoey2 from './views/frame1-thumb-joey2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Frame1ThumbJoey} exact path="/" />
        <Route component={Frame1ThumbJoey1} exact path="/frame1-thumb-joey1" />
        <Route component={Frame1ThumbJoey2} exact path="/frame1-thumb-joey2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
