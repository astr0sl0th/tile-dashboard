import React from 'react';
import Grid from './Grid/Grid';
import GridItem from './GridItem/GridItem';
import { FaBatteryThreeQuarters, FaRunning, FaBed, FaDumbbell } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import './App.css'

const App = () => {
  const dashboard = [{
    title: '16 | 24',
    info: 'Goals Completed',
    Icon: () => null,
    gridColumn: '1/3'
  }, {
    title: '',
    info: 'Respiration',
    Icon: () => <FaBatteryThreeQuarters />
  }, {
    title: '',
    info: 'Miles',
    Icon: () => <FaRunning />
  }, {
    title: '680 Kcal',
    info: 'AVG Consumption',
    Icon: () => null
  }, {
    title: '',
    info: 'Workouts',
    Icon: () => <FaDumbbell />
  }, {
    title: '85%',
    info: 'Body Hydration',
    Icon: () => null,
    gridColumn: '3/5'
  },
  {
    title: '170 Lbs',
    info: 'Weight',
    Icon: () => null,
    gridColumn: '1/3'
  }, {
    title: '28 % ',
    info: 'Fat Percentage',
    Icon: () => null
  }, {
    title: '118 mgdl',
    info: 'Blood Glucose',
    Icon: () => null,
  }, {
    title: '36',
    info: 'Temperature',
    Icon: () => null
  }, {
    title: '',
    info: 'Sleep Keep',
    Icon: () => <FaBed />
  }, {
    title: '78 BPM',
    info: 'Heart Rate',
    Icon: () => null,
    gridColumn: '3/5'
  }]

  return (
    <Grid>
      {dashboard.map(({ title, info, Icon, gridColumn }, index) =>
        <GridItem key={index} gridColumn={gridColumn}>
          <IconContext.Provider value={{ size: 55, }}>
            {title ? <h1>{title}</h1> : <Icon />}
            <h2>{info}</h2>
          </IconContext.Provider>
        </GridItem>)}
    </Grid>
  );
}

export default App;
