import React from 'react';
import Day from './Day';

const Calendar = () => {

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '7em'
  }

  return (
    <div style={style}>
      <Day number='8' name='JUE' />
      <Day number='10' name='VIE' />
      <Day number='11' name='SAB'  active={true}/>
      <Day number='12' name='DOM' />
      <Day number='13' name='LUN' />
    </div>
  )
};

export default Calendar;