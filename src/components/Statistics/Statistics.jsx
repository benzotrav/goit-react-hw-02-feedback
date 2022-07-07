import PropTypes from 'prop-types';
import {
  FeedbackList,
  Item,
  TotalText,
  FeedbackText,
  PositiveFeedback,
} from './Statistics-styled';

export const Statistics = ({ statsArray, positivePercentage, total }) => {
  return (
    <>
      <FeedbackList>
        {statsArray.map(item => (
          <Item key={item[0]}>
            <FeedbackText>
              {item[0]}: {item[1]}
            </FeedbackText>
          </Item>
        ))}
      </FeedbackList>
      <TotalText>Total: {total}</TotalText>
      <PositiveFeedback value={positivePercentage}>
        Positive Feedback: {positivePercentage}%
      </PositiveFeedback>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  statsArray: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
};