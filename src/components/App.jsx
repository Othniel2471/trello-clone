import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { sort } from '../actions/listActions';

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};

function App({ lists, dispatch }) {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
      ),
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="app">
          <h2>App</h2>
          <div style={styles.listsContainer}>
            {lists.map((list) => (
              <TrelloList
                key={list.id}
                title={list.title}
                cards={list.cards}
                listID={list.id}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    </>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

App.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
