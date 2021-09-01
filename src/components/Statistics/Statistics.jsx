import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statsLabel = { good, neutral, bad };

  return (
    <>
      <ul className={s.statsList}>
        {Object.keys(statsLabel).map(label => (
          <li className={s.statsItem} key={label}>
            <p className={s.stats}>
              {label}: <span>{statsLabel[label]}</span>
            </p>
          </li>
        ))}

        <li className={s.statsItem}>
          <p className={[s.stats, s.total].join(' ')}>
            Total: <span>{total}</span>
          </p>
        </li>

        <li className={s.statsItem}>
          <p className={[s.stats, s.total].join(' ')}>
            Positive feedback:
            <span>{positivePercentage}%</span>
          </p>
        </li>
      </ul>
    </>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
