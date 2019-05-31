import React, {Component} from 'react'
import { Navbar } from "react-bulma-components/full";


class NavBar extends Component {

    // set active state for hamburger
    state = { active : false }

    handleClick = () => { 
        let { active } = this.state;
        this.setState({ active: !active }); 
     }
  

    render() {
      return (
            
            <div>
                <Navbar color="info" fixed="top" active={this.state.active}>
                    <Navbar.Brand>
                        <Navbar.Item renderAs="a" href="/">
                        </Navbar.Item>
                        <Navbar.Burger
                        active={this.state.active}
                        onClick={this.handleClick}
                />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container>
                        <Navbar.Item href="/">Home</Navbar.Item>
                        <Navbar.Item href="/about"> About Us</Navbar.Item>
                        <Navbar.Item href="/contact"> Gallery</Navbar.Item>
                        <Navbar.Item href="/contact"> Donate</Navbar.Item>
                        <Navbar.Item href="/contact"> Contact Us</Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                    </Navbar>
            </div>
      )
    }
  }


  export default NavBar;