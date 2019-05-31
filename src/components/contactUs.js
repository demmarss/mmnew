import React, {Component} from 'react'
import { Container, Hero, Columns, Image, Message, Button, Heading  } from "react-bulma-components/full";

class ContactUs extends Component {
  

    render() {
      return (
            
            <Message color="info">
                <Message.Header>
                   Contact Us
                </Message.Header>
                <Message.Body>
                    <p className="has-text-black-bis is-size-5">2419 12th Ave S STE 4</p>
                    <p className="has-text-black-bis is-size-5">Moorhead, MN 56560</p>
                    <p className="has-text-black-bis is-size-5">moorheadmasjidna@gmail.com</p>
                    <p  className="has-text-black-bis is-size-5">+1(218)-329-8343</p>
                </Message.Body>
                
            </Message>
      )
    }
  }


  export default ContactUs;