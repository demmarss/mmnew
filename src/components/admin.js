import React, {Component} from 'react'
import SolahTimeForm from './solahTimeForm'
import NavBar from './navBar'
let codeCorrect = "12345"
class Admin extends Component {
    state ={
        code: "",
        displaySolahForm: false,
        badEntry: false
    }

    handleChange = (e) =>{
        this.setState({
            code: e.target.value
        })
    }

    checkCode = (e) =>{
        if(this.state.code == codeCorrect){
            this.setState({
                displaySolahForm: true,
                badEntry: false,
                admin:false,
                code: ""
            })
        }

        if(this.state.code !== codeCorrect){
            this.setState({
                badEntry: true,
                displaySolahForm: false
            })
        }
        e.preventDefault();
      }

    render(){
        return (
            <div> 
                <NavBar/>
                <br/>
                <div class="columns">
                    <div class="column">
                        
                    </div>
                    <div class="column">
                        <div>
                            <input className="input" type="text" value={this.state.code} placeholder="Enter admin code" onChange={this.handleChange}/>

                            {this.state.code !==""? <button className="button is-danger" onClick = {this.checkCode}>Submit</button>:null}

                        </div>
                        {(this.state.displaySolahForm)? 
                            <SolahTimeForm/>:null}
                        {(this.state.badEntry)? <div> Please enter the correct code</div>: null}
                    </div>
                    <div class="column">
                        
                    </div>
                </div>



            </div>
        )
    }
}

export default Admin;