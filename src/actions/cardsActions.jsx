import CONSTANT from '.';

const addCard = (listID, text) => ({
  type: CONSTANT.ADD_CARD,
  payload: { text, listID },
});

const editCardText = (cardId, newText) => ({
  type: CONSTANT.EDIT_CARD_TEXT,
  payload: {
    cardId,
    newText,
  },
});

export default addCard;
export { editCardText };
