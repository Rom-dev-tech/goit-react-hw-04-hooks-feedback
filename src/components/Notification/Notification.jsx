import Title from '../Title';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <Title title={message} titleSize="h3" />;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
