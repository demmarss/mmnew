import React, {Component} from 'react'
import { Footer, Container, Hero, Columns, Button  } from "react-bulma-components/full";
import { Link } from 'react-router-dom';

class FooterBar extends Component {
  
    render() {
      return (
            
            <div>
                <Hero>
                    <Hero.Head/>
                    <Hero.Body />
                    <Hero.Footer>
                    <Footer>
                        <Container>
                            <Columns>
                                <Columns.Column>
                                    
                                    <h1 className="title">Links</h1>
                                    
                                    <ul className="menu-list">
                                        <li>Facebook</li>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
                                        <li><a href="https://www.gofundme.com/moorhead-mosque-foundation">GoFundMe</a></li>
                                    </ul>
                                </Columns.Column>
                                <div className="is-divider-vertical" data-content="OR"></div>
                                <Columns.Column>
                                    
                                    <h1 className="title">Our Activities</h1>
                                    
                                    <ul className="menu-list">
                                        <li>Community Dawah</li>
                                        <li>Islamic Classes</li>
                                        <li>Nikah, Aqeeqah etc.</li>
                                        <li>Daily Salah and Jumah</li>
                                    </ul>
                                </Columns.Column>
                                <div className="is-divider-vertical" data-content="OR"></div>
                                <Columns.Column>
                                    
                                    <h1 className="title">Our Address</h1>
                                    
                                    <ul className="menu-list">
                                        <li>Moorhead-Fargo Islamic Community Center</li>
                                        <li>P.O.Box 834,</li>
                                        <li>Moorhead MN 56560</li>
                                        <li>moorheadmasjidna@gmail.com</li>
                                        {/* <li>info@moorheadmnmosque.org</li> */}
                                        <li>+1(218) 329-8343</li>

                                        <li>
                                            <Link to='/admin'>
                                                <Button>Admin</Button>
                                            </Link>
                                        </li>
                                            
                                    </ul>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    </Footer>
                    </Hero.Footer>
                </Hero>
            </div>
      )
    }
  }


  export default FooterBar;