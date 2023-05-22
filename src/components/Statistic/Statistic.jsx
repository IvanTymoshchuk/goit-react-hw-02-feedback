import PropTypes from 'prop-types';
import { StatisticList, DescrStatistic } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <li>
        <DescrStatistic>Good: {good}</DescrStatistic>
      </li>
      <li>
        <DescrStatistic>Neutral: {neutral}</DescrStatistic>
      </li>
      <li>
        <DescrStatistic>Bad: {bad}</DescrStatistic>
      </li>
      <li>
        <DescrStatistic>Total: {total}</DescrStatistic>
      </li>
      <li>
        <DescrStatistic>
          Positive feedback: {positivePercentage}%
        </DescrStatistic>
      </li>
    </StatisticList>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
