import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsList, StatisticsItem, StatisticsLabel } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsContainer>
      {title && <h2 className="title">{title}</h2>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <span className="percentage">{percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
