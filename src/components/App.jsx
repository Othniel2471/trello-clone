import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function App(props) {
  const { lists } = props;
  return (
    <>
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
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

App.propTypes = {
  lists: PropTypes.array.isRequired,
};

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default connect(mapStateToProps)(App);
