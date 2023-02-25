import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
      {stats.map(({id, label, percentage}) => (
      
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>))}</ul>
      
    </section>
  );
};

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string
}