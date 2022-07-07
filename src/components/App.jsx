import React, { Component } from 'react';
import { Feedback } from "./Section/Section";
import { Statistics } from './Statistics/Statistics';
import { Options } from './Options/Options';



export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };    


    choseAnswer = answearValue => {
        this.setState(prevState => {
          return { [answearValue]: prevState[answearValue] + 1 };
        });
      };
    
      countTotalFeedback() {
        const answearValues = Object.values(this.state);
    
        return answearValues.reduce((acc, item) => {
          return acc + item;
        }, 0);
      }
    
      countPositiveFeedbackPercentage() {
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedback = this.state.good;
    
        if (positiveFeedback === 0) {
          return Number(0);
        } else {
          return Number(((positiveFeedback / totalFeedback) * 100).toFixed(0));
        }
      }

  
    render() {  
        const buttonsArray = Object.keys(this.state);
        const statsArray = Object.entries(this.state);
        const totalAnswears = this.countTotalFeedback();
        const avarageValue = this.countPositiveFeedbackPercentage();

      return (
        <div>
          <Feedback title="Please leave feedback">
          </Feedback>
          <Options
            options={buttonsArray}
            onLeaveFeedback={this.choseAnswer}
          />
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