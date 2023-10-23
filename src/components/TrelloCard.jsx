import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';

import PropTypes from 'prop-types';

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

const TrelloCard = ({ text, id, index }) => (
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
            <Typography color="textSecondary" gutterBottom>
              {text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )}
  </Draggable>
);

TrelloCard.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TrelloCard;
