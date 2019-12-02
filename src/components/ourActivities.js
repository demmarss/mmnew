import React, {Component} from 'react'
import { Container, Hero, Columns, Card, Content  } from "react-bulma-components/full";
import dawah1 from "../images/dawah1.jpg"
import dawah5 from "../images/dawah5.jpg"
import jumah from "../images/jumah.jpg"
import '../css/ourActivitiesBg.css';

class Activities extends Component {
  

    render() {
      return (
            
            <div className="ourActivitiesBg">
                <Hero size="fullheight">
                    <Hero.Body>
                        <Container>
                        <div className="has-text-centered">
                        <h1 className="title is-1 has-text-white">
                            Our Activities
                        </h1>
                        <hr/>
                        </div>
                        <Columns>
                            <Columns.Column size="one-third">
                                <Card>
                                    <Card.Image size="4by3" src={dawah1} />
                                        <p className="title is-4 no-padding">Islamic Class</p>
                                    <Card.Content>
                                        <Content>
                                            <p className="subtitle is-6">Quran, 39:9</p>
                                            <p>"Are those who have knowledge and those who have no knowledge alike? Only the men of understanding are mindful." </p>
                                            <hr/>
                                            <p className="subtitle is-6">Quran 96:105</p>
                                            <p>"Read: In the name of your Lord Who creates - creates man from a clot. Read: And your Lord is the Most Bounteous, 
                                                Who teaches by the use of the pen, teaches man that which he knew not." </p>
                                        </Content>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>
                            <Columns.Column size="one-third">
                                <Card>
                                    <Card.Image size="4by3" src={dawah5} />
                                        <p className="title is-4 no-padding">Community Dawah</p>
                                    <Card.Content>
                                        <Content>
                                            <p className="subtitle is-6">An-Nahl 16:125</p>
                                            <p>“Invite to the path of your Lord with wisdom and good advice”.</p>
                                            <br/>
                                            <hr/>
                                            <p className="subtitle is-6">Aal `Imran 3:104</p>
                                            <p>Let there be a group of people among you who invite to goodness, enjoining what is right and forbidding what is wrong.</p>
                                            
                                        </Content>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>
                            <Columns.Column size="one-third">
                                <Card>
                                    <Card.Image size="4by3" src={jumah} />
                                        <p className="title is-4 no-padding">Daily and Jumah Prayer</p>
                                    <Card.Content>
                                        <Content>
                                            <p className="subtitle is-6">Taha, 14</p>
                                            <p>“Verily I am Allah: there is no god but I: so serve thou Me, (only) and establish regular prayer for celebrating My praise.”</p>
                                            <hr/>
                                            <p className="subtitle is-6">Maryam 59</p>
                                            <p>“But after them there followed a posterity who missed prayers and followed after lusts: soon, then will they face Destruction.”</p>
                                        </Content>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>
                        </Columns>

                        </Container>
                    </Hero.Body>
                </Hero>
            </div>
      )
    }
  }


  export default Activities;