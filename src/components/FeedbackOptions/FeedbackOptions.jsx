import PropTypes from 'prop-types';
import Button from '../Button';
import s from '../FeedbackOptions/FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        {options.map((stats, index) => (
          <li className={s.buttonItem} key={[stats, index].join(' ')}>
            <Button onLeaveFeedback={onLeaveFeedback} statsLabel={stats} />
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
