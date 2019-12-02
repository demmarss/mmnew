import React, {Component} from 'react'
import Header from './header'
import MainProject from './mainProject'
import Activities from './ourActivities'
import AboutUs from './aboutUs'

class HomePage extends Component {

render() {
      return (
        <div>
          <Header />
          <MainProject/>
          <Activities/>
          <AboutUs/>
          {/* <Donate/> */}
          {/* <Gallery/>
          <ContactUs/> */}
        </div>
      )
    }
  }


  export default HomePage;