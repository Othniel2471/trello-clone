import PropTypes from 'prop-types';
import TrelloCard from './TrelloCard';

const TrelloList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  },
};

TrelloList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default TrelloList;
