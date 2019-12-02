import React, {Component} from 'react'
import { Heading, Level, Box, Button  } from "react-bulma-components/full";

const style = { textAlign: 'center' };
    
class Donate extends Component {
  

    render() {
      return (
            
            <div className="container donatePage">
                
                    
                <Box>
                <Heading className="title">
                        Donate
                    </Heading>
                    <hr/>
                    <Level renderAs="nav">
                    <Level.Item style={style}>
                        <div>
                        <Heading className="title is-4 has-text-info">
                            GoFundMe
                        </Heading>
                        <br/>
                        <Button color="danger" size="large" rounded outlined>Click to donate</Button>
                        </div>
                    </Level.Item>
                    <Level.Item style={style}>
                        <div>
                        <Heading className="title is-4 has-text-info">
                        GoFundMe
                        </Heading>
                        <br/>
                        <Button color="danger" size="large" rounded outlined>Click to donate</Button>
                        </div>
                    </Level.Item>
                    <Level.Item style={style}>
                        <div>
                        <Heading className="title is-4 has-text-info">
                            Lunchgood
                        </Heading>
                        <br/>
                        <Button color="danger" size="large" rounded outlined>Click to donate</Button>
                        </div>
                    </Level.Item>
                    </Level>
                </Box>
                
                
            </div>
      )
    }
  }


  export default Donate;