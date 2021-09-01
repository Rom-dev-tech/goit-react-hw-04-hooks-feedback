import PropTypes from 'prop-types';
import s from '../Button/Button.module.scss';

const Button = ({ onLeaveFeedback, statsLabel }) => {
  return (
    <button
      className={[s.button, s[statsLabel]].join(' ')}
      type="button"
      onClick={() => onLeaveFeedback(statsLabel)}
    >
      <span>{statsLabel}</span>
    </button>
  );
};

Button.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  statsLabel: PropTypes.string.isRequired,
};

export default Button;
