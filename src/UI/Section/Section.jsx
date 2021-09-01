import PropTypes from 'prop-types';
import Container from '../../UI/Container';
import s from '../Section/Section.module.scss';

const Section = ({ children }) => {
  return (
    <section className={s.section}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
