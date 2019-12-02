import React, {Component} from 'react';
import axios from 'axios';

export default class SolahTimeForm extends Component {

    state = {
        fajirTime: "",
        zuhurTime: "",
        asirTime: "",
        magribTime: "",
        ishaTime: ""
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    updateSolahTime = () => {
                
        axios.post('http://localhost:3000/solarTimes/setSolahTime', this.state)
        
        this.forceUpdate();
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
                                <input className="input" type="text" placeholder="Enter time" name="fajirTime" onChange={this.handleChange}/>
                                 am
                            </td>
                        </tr>
                        <tr>
                            <th>Dhuhr</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" name="zuhurTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                        <tr>
                            <th>Asr</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" name="asirTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                        <tr>
                            <th>Maghrib</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" name="magribTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                        <tr>
                            <th>Isha</th>
                            <td>
                                <input className="input" type="text" placeholder="Enter time" name="ishaTime" onChange={this.handleChange}/>
                                pm
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="button is-danger" onClick = {this.updateSolahTime}>Submit</button>
            </div>
        )
    }
   
}