import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Button, Card } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addList from '../actions/listActions';
import addCard from '../actions/cardsActions';

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.25)',
    },
    formButtonGroup: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
    },
  },
};

class TrelloActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
    };
  }

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: '',
      });
      dispatch(addList(text));
    }
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: '',
      });
      dispatch(addCard(listID, text));
    }
  };

  renderAddButton = () => {
    const { list } = this.props || {};
    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

    return (
      <button
        type="button"
        onClick={this.openForm}
        onKeyDown={this.openForm}
        style={{
          ...styles.button,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
          border: 'none',
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </button>
    );
  };

  renderForm = () => {
    const { list } = this.props || {};
    const placeholder = list
      ? 'Enter list title...'
      : 'Enter a title for this card...';

    const buttonTitle = list ? 'Add List' : 'Add Card';

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: '6px 8px 2px',
          }}
        >
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ color: 'white', backgroundColor: '#5aac44' }}
          >
            {buttonTitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: 'pointer',
            }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  };

  render() {
    const { formOpen } = this.state;

    return formOpen ? this.renderForm() : this.renderAddButton();
  }
}

TrelloActionButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listID: PropTypes.string,
};

TrelloActionButton.defaultProps = {
  listID: '',
};

export default connect()(TrelloActionButton);
