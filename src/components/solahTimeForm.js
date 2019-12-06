import React, {Component} from 'react';
import {createSolahTime} from '../api'

export default class SolahTimeForm extends Component {

    state = {
        fajirTime: "",
        zuhurTime: "",
        asirTime: "",
        magribTime: "",
        ishaTime: "",
        submit: false
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    updateSolahTime = () => {
        createSolahTime(this.state)
        this.setState({
            fajirTime: "",
            zuhurTime: "",
            asirTime: "",
            magribTime: "",
            ishaTime: "",
            submit: true
        })
    }
    render(){
        
        return(
            <div>
                <table className="table" align="center">
                    <thead>
                        <tr className="is-selected">
                            <th colSpan={2}>Salah Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Fajir</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" value = {this.state.fajirTime} name="fajirTime" onChange={this.handleChange}/>
                                 am
                            </td>
                        </tr>
                        <tr>
                            <th>Dhuhr</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" value ={this.state.zuhurTime} name="zuhurTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                        <tr>
                            <th>Asr</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" value ={this.state.asirTime} name="asirTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                        <tr>
                            <th>Maghrib</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" value ={this.state.magribTime} name="magribTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                        <tr>
                            <th>Isha</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" value ={this.state.ishaTime} name="ishaTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="button is-danger" onClick = {this.updateSolahTime}>Submit</button>
                {this.state.submit? <div>
                    <div className="notification is-success">
                        Solah time is submited successfully. 
                    </div>
                </div>:null}
            </div>
        )
    }
   
}