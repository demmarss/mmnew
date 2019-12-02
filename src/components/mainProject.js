import React, {Component} from 'react'
import { Container, Hero, Columns, Image  } from "react-bulma-components/full";
import NewMosque1 from "../images/NewMosque1.jpg"
import '../css/mainProjectStyle.css';

class MainProject extends Component {
  

    render() {
      return (     
        <div className="mainProjectBg">
            <Hero size="fullheight">
                <Hero.Body>
                    <Container>
                        <div className="has-text-centered">
                        <h1 className="title is-1 has-text-white">
                            Main Project
                        </h1>
                        <hr/>
                        </div>
                        <Columns>
                            <Columns.Column size="one-half">
                                <Image src={NewMosque1} size="2by1" alt="Mosque Image"/>
                            </Columns.Column>
                            <Columns.Column>
                                <h1 className="title is-2 has-text-white">
                                    Moorhead-Fargo Islamic Community Center
                                </h1>
                                <h2 className="subtitle is-4 has-text-white">
                                    Suupport the course of Allah
                                </h2>
                                <h4 className="subtitle is-3 has-text-white">
                                    Building the future of Ummah
                                </h4>
                                <br/>
                                <p className="has-text-centered">
                                    <a className="button is-medium has-text-success" href="https://www.gofundme.com/moorhead-mosque-foundation">
                                        Donate Now
                                    </a>
                                </p>
                            </Columns.Column>
                        </Columns>

                    </Container>
                </Hero.Body>
            </Hero>
        </div>
      )
    }
  }


  export default MainProject;