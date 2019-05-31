import React, {Component} from 'react'
import { Footer, Container, Hero, Columns, Button  } from "react-bulma-components/full";


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
                                    <p className="menu-label">
                                        <h1 className="title">Links</h1>
                                    </p>
                                    <ul className="menu-list">
                                        <li><a href="https://www.facebook.com/max.alik.9">Facebook</a></li>
                                        <li><a>Twitter</a></li>
                                        <li><a>Instagram</a></li>
                                        <li><a href="https://www.gofundme.com/moorhead-mosque-foundation">GoFundMe</a></li>
                                    </ul>
                                </Columns.Column>
                                <div className="is-divider-vertical" data-content="OR"></div>
                                <Columns.Column>
                                    <p className="menu-label">
                                        <h1 className="title">Our Activities</h1>
                                    </p>
                                    <ul className="menu-list">
                                        <li><a>Community Dawah</a></li>
                                        <li><a>Islamic Classes</a></li>
                                        <li><a>Nikah, Aqeeqah etc.</a></li>
                                        <li><a>Daily Salah and Jumah</a></li>
                                    </ul>
                                </Columns.Column>
                                <div className="is-divider-vertical" data-content="OR"></div>
                                <Columns.Column>
                                    <p className="menu-label">
                                        <h1 className="title">Our Address</h1>
                                    </p>
                                    <ul className="menu-list">
                                        <li>Moorhead-Fargo Islamic Community Center</li>
                                        <li>P.O.Box 834,</li>
                                        <li>Moorhead MN 56560</li>
                                        <li>moorheadmasjidna@gmail.com</li>
                                        {/* <li>info@moorheadmnmosque.org</li> */}
                                        <li>+1(218) 329-8343</li>

                                        <li><Button>Admin only</Button></li>
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