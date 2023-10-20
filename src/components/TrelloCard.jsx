import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import PropTypes from 'prop-types';

const TrelloCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

TrelloCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TrelloCard;
