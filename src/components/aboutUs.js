import React, {Component} from 'react'
import { Container, Hero, Columns, Heading, Tile  } from "react-bulma-components/full";


class AboutUs extends Component {
  

    render() {

      return (
            
            <div className="aboutUsBg">
                
                <Hero>
                    <Hero.Body>
                        <Container>
                            <div class="has-text-centered">
                                <h1 class="title is-1 has-text-info">
                                    Our Mission and Vision
                                </h1>
                            <hr/>
                            </div>
                            <Columns>
                                <Columns.Column size="one-half">
                                    <Tile kind="parent">
                                        <Tile renderAs="article" kind="child" notification color="info">
                                            <Heading>Our Mission</Heading>
                                            <hr/>
                                            <Heading class="subtitle is-3">The Moorhead-Fargo Islamic Community Center (MFICC).......</Heading>
                                            <ul>
                                                <li><p className="subtitle is-4"> ....is a 501(c)(3) non-profit organization registered with the State of Minnesota</p></li>
                                                <br/>
                                                <li><p className="subtitle is-4"> .....caters to the spiritual needs of the Muslim population of the greater Moorhead-Fargo area </p></li>
                                                <br/>
                                                <li><p className="subtitle is-4"> .....serves as a liaison to the non-Muslim community.</p></li>
                                            </ul>                                        
                                        </Tile>
                                    </Tile>
                                </Columns.Column>
                                <Columns.Column size="one-half">
                                    <Tile kind="parent">
                                        <Tile renderAs="article" kind="child" notification color="warning">
                                            <Heading>Our Vision</Heading>
                                            <hr/>
                                            <Heading class="subtitle is-3">MFICC aims .....</Heading>
                                            <ul>
                                                <li><p className="subtitle is-4"> To uplift humanity moral standard through the devine guidance.</p></li>
                                                <br/>
                                                <li><p className="subtitle is-4"> To establish peace and tranquility within the Moorhead and Fargo neighbourhood </p></li>
                                                <br/>
                                                <li><p className="subtitle is-4"> To champion communal development of individual and the society at large </p></li>
                                                <br/>
                                                <li><p className="subtitle is-4"> To encourage and foster the understanding of Islam </p></li>
                                            </ul>                                        
                                        </Tile>
                                    </Tile>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    </Hero.Body>
                </Hero>

            </div>
      )
    }
  }


  export default AboutUs;