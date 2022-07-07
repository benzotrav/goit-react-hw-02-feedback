import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Feedback } from "./Section/Section";
import { Statistics } from './Statistics/Statistics';



export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };    

  
    render() {  
        const buttonsArray = Object.keys(this.state);
        const statsArray = Object.entries(this.state);
        const totalAnswears = this.countTotalFeedback();
        const avarageValue = this.countPositiveFeedbackPercentage();

      return (
        <div>
          <Feedback title="Please leave feedback">
          </Feedback>
          <Feedback title="Statistics">    
          {totalAnswears === 0 ? (
            <h1>No feedback given</h1>
          ) : (
            <Statistics
              total={totalAnswears}
              positivePercentage={avarageValue}
              statsArray={statsArray}
            />
          )}        
          </Feedback>
        </div>
      );
    }
  }