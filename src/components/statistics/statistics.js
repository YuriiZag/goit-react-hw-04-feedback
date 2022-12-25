import {
  StatitsticsList,
  Value,
  Header,
  Container,
  ListItem,
} from './statistics.styled';
import { Notification } from 'components/notification-message/notification';
import { PropTypes } from 'prop-types';

export const Statitstics = props => {
  const countTotalFeedback = () => {
    const { good, bad, neutral } = props;
    return good + bad + neutral;
  };

  const countPositiveFeedback = () => {
    const { good } = props;
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <Container>
      <Header>Statitstics</Header>

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <StatitsticsList>
          {Object.keys(props).map(p => {
            return (
              <ListItem key={p}>
                <p>
                  {p}:<Value>{props[p]}</Value>
                </p>
              </ListItem>
            );
          })}
          <ListItem key="total">
            <p>
              total: <Value>{countTotalFeedback()}</Value>
            </p>
          </ListItem>
          <ListItem key="positiveFeedback">
            <p>
              positiveFeedback: <Value>{countPositiveFeedback()}%</Value>
            </p>
          </ListItem>
        </StatitsticsList>
      )}
    </Container>
  );
};

Statitstics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.any.isRequired,
};
