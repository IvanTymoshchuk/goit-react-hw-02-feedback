import PropTypes from 'prop-types';
import { Paragraf } from './Notificatin.styled';

const Notification = ({ message }) => {
  return <Paragraf>{message}</Paragraf>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
