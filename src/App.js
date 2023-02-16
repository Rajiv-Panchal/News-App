import React, { Component } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import News from './Components/News'
// import NewsItems from './Components/NewsItems'
import Footer from './Components/Footer'
// import { Route } from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <HashRouter>
              <Header/>
                <Routes>
                  <Route exact path="general" element={<News key="general" category="general" pageSize={9}/>}/>

                    <Route exact path="business" element={<News key="business" category="business" pageSize={9}/>} />
                    <Route exact path="entertainment" element={<News key="entertainment" category="entertainment" pageSize={9}/>} />
                    <Route exact path="science" element={<News key="science"category="science" pageSize={9}/>} />
                    <Route exact path="sports" element={<News key="sports"category="sports" pageSize={6}/>} />
                    <Route exact path="Technology" element={<News key="Technology"category="Technology" pageSize={9}/>} />
                    
                    <Route exact path="Health" element={<News key="Health"category="Health" pageSize={9}/>} />
                </Routes>
                <Footer/>
              </HashRouter>
    )
  }
}
