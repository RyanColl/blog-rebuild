import Nav from '../Nav/Nav';
import './App.css';
import {Switch, Route, useParams} from 'react-router-dom'
import Welcome from '../Welcome/Welcome';
import Blog from '../Blog/Blog';
import { useEffect } from 'react';
import store from '../Redux/store';
import * as actions from '../Redux/actions'
import BlogPost from '../Blog/BlogPost/BlogPost';
import { blogList } from '../Services/Services';
import React from 'react';
const App = () => {
  const height = window.innerHeight
  const width = window.innerWidth
  useEffect(() => {
    window.scrollTo(0, 0)
    store.dispatch(actions.location('/'.concat(window.location.pathname.split('/')[1])))
  })
  return (
      <div className="App">
        
        <img className="hex-img" 
        src={'/img/hex.png'}
        style={{width: width-15}}
        />
        <Nav />
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <Welcome />
            </Route>
            <Route path='/blog' exact>
                <Blog />
            </Route>
            <Route path='/blog/:id'>
              <BlogPost />
            </Route>
          </Switch>
          
        </div>
      </div>
    
  );
}

export default App;

