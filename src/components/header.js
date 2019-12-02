import React, {Component } from 'react'
import { Container, Hero, Columns, Image, Button  } from "react-bulma-components/full";
import logoTransBg from "../images/logoTransBg.png"
import '../css/headerStyle.css'; 
import ContactUs from './contactUs'

import { SolahTime } from './solahTime';

class Header extends Component {

    render() {

      return (
        <div className="bg-img">
            <Hero size="fullheight">
                <Hero.Head>
                        <Container>
                            <br/>
                            <Columns>
                                <Columns.Column size="one-third">
                                    
                                    <Image src={logoTransBg} alt="MM logo"/>
                                    
                                    <br/>
                                    <h1 className="title is-4 has-text-centered">Welcome to the straight path</h1>
                                                                    
                                </Columns.Column>
                                <Columns.Column size="two-third has-text-centered">
                                    <h1 className="title is-1 is-hidden-mobile">
                                        Moorhead-Fargo Islamic Community Center
                                    </h1>
                                    <a href="https://www.gofundme.com/moorhead-mosque-foundation">
                                        <Button color="success" size="large" rounded >Click to donate</Button>
                                    </a>
                                    
                                </Columns.Column>
                            </Columns>
                        </Container>
                </Hero.Head>

                <Hero.Body>
                    <Container>
                            <Columns>
                                <Columns.Column size="one-third">
                                    <SolahTime/>                                                
                                </Columns.Column>
                                <Columns.Column size="one-third">
                                    
                                </Columns.Column>

                                <Columns.Column size="one-third">
                                    <ContactUs/>
                                </Columns.Column>
                            </Columns>
                    </Container>
                </Hero.Body>
                <Hero.Footer/>
            </Hero>
        </div>
      )
    }
  }


  export default Header;