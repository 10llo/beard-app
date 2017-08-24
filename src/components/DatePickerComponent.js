import React, { Component } from 'react';
import { Calendar } from 'react-date-range';

export default class DatePickerComponent extends Component {
    handleSelect(date){
        console.log(date); // Momentjs object
    }

    render(){
        return (
            <div>
                <Calendar
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>
        )
    }
}