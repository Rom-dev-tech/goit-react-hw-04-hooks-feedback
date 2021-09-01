import PropTypes from 'prop-types';
import s from '../Container/Container.module.scss';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
