//Dependencies
import React, { Component } from 'react';

//Components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

//data
import items from '../data/menu';

var name = "fortino sandoval";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Fortino Sandoval" items={items}/>
        <Content />
        <Footer copyright="&copy; Fortino sandoval 2018"/>
      </div>
    );
  }
}
export default App;