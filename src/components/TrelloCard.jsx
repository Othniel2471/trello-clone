import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { editCardText } from '../actions/cardsActions';

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
  editButton: {
    transform: 'translate(14rem, -42px)',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '10px',
    cursor: 'pointer',
  },
  saveButton: {
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5aac44',
    color: '#fff',
    borderRadius: '3px',
    padding: '6px 12px',
    margin: '3px 0',
    cursor: 'pointer',
  },
};

const TrelloCard = ({
  text, id, index, editCardText,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    editCardText(id, editedText);
    setEditing(false);
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              {isEditing ? (
                <>
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleSaveClick}
                    style={styles.saveButton}
                  >
                    save
                  </button>
                </>
              ) : (
                <>
                  <Typography color="textSecondary" gutterBottom>
                    {text}
                  </Typography>
                  <button
                    type="button"
                    onClick={handleEditClick}
                    style={styles.editButton}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editCardText: (cardId, newText) => dispatch(editCardText(cardId, newText)),
});

TrelloCard.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  editCardText: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TrelloCard);
