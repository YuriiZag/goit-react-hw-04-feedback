import { useState } from 'react';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback-options/feedback-options';
import { Statitstics } from './statistics/statistics';

const OPTIONS_LIST = ['good', 'neutral', 'bad'];



export const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  async function  onClickHandler(e){
    
    switch (e.target.value) {
      case 'good':
        setGoodCount(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutralCount(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBadCount(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
    
  };



  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={OPTIONS_LIST}
          onLeaveFeedback={onClickHandler}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statitstics
          good={goodCount}
          neutral={neutralCount}
          bad={badCount}
        ></Statitstics>
      </Section>
    </>
  );
};

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClickHandler = e => {
//     this.setState(
//       prevState => {
//         return {
//           [e.target.value]: prevState[e.target.value] + 1,
//         };
//       });

//     this.positiveFeedbackCalc(this.state.good)
//     this.totalFeedbackCalc();
//     console.log(this.state);

//   };

//   totalFeedbackCalc = () => {
//     total += 1;
//     return total;
//   };
//    positiveFeedbackCalc = () => {
//      this.setState(prevState => {
//              positiveFeedback = (prevState.good / total) * 100 + '%';
//            }
//       )
//   };

//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={OPTIONS_LIST}
//             onLeaveFeedback={this.onClickHandler}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           <Statitstics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={total}
//             positivePercentage={positiveFeedback}
//           ></Statitstics>
//         </Section>
//       </>
//     );
//   }
// }
