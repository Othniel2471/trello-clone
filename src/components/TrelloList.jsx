import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 8,
  },
};

const TrelloList = ({ title, cards, listID }) => (
  <Droppable droppableId={String(listID)}>
    {(provided) => (
      <div
        style={styles.container}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        <h3>{title}</h3>
        {cards.map((card, index) => (
          <TrelloCard
            key={card.id}
            index={index}
            text={card.text}
            id={card.id}
          />
        ))}
        <TrelloActionButton listID={listID} />
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

TrelloList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  listID: PropTypes.string.isRequired,
};

export default TrelloList;
