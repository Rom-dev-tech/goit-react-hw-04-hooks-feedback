import PropTypes from 'prop-types';
import Container from '../../UI/Container';
import Title from '../../components/Title';
import s from '../Section/Section.module.scss';

const Section = ({ title, titleSize, children }) => {
  return (
    <section className={s.section}>
      <Container>
        <Title title={title} titleSize={titleSize} />
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
