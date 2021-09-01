import PropTypes from 'prop-types';
import s from '../Title/Title.module.scss';

const Title = ({ title, titleSize }) => {
  return (
    <div className={s.subTitleWraper}>
      <h2 className={[s.title, s[titleSize]].join(' ')}>{title}</h2>
      <h2 className={[s.title, s[titleSize]].join(' ')}>{title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.string.isRequired,
};

export default Title;
