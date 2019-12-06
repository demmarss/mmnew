import React, {Component} from 'react';
import {getSolahTime} from '../api'


export class SolahTime extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        this.fetchData()
      }

    fetchData = async () => {
        const data = await getSolahTime();
        this.setState({ data })
    };


    render(){
        
        return(
            (this.state.data.length != 0)? 
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
                            <td> {this.state.data.Fajir} am</td>
                        </tr>
                        <tr>
                            <th>Zuhur</th>
                            <td>{this.state.data.Zuhur} pm</td>
                        </tr>
                        <tr>
                            <th>Asir</th>
                            <td>{this.state.data.Asir} pm</td>
                        </tr>
                        <tr>
                            <th>Magrib</th>
                            <td>{this.state.data.Magrib} pm</td>
                        </tr>
                        <tr>
                            <th>Ishai</th>
                            <td>{this.state.data.Ishai} pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>:
            null
        )
    }
   
}