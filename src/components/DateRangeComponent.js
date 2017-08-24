import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const {RangePicker} = DatePicker
function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class DateRangeComponent extends Component {
    render(){
        return(
            <div>
                <LocaleProvider locale={enUS}>
                    <RangePicker onChange={onChange} />
                </LocaleProvider>

            </div>
        )
    }
}