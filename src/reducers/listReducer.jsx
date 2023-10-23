import { v4 as uuidv4 } from 'uuid';
import CONSTANT from '../actions/index';

// Function to save data to local storage
const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Function to retrieve data from local storage
const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

let ListId = uuidv4();
let CardId = uuidv4();

// Load data from local storage on app initialization
const localData = getDataFromLocalStorage('lists');
const initialState = localData || [];

const ListReducer = (state = initialState, action) => {
  let newList;
  let newCard;
  let newState;

  switch (action.type) {
    case CONSTANT.ADD_LIST:
      newList = {
        title: action.payload.title,
        cards: [],
        id: `list-${ListId}`,
      };

      ListId += 1;

      newState = [...state, newList];

      // Save the updated state to local storage
      saveDataToLocalStorage('lists', newState);

      return newState;

    case CONSTANT.ADD_CARD:
      newCard = {
        text: action.payload.text,
        id: `card-${CardId}`,
      };

      CardId += 1;

      newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        }
        return list;
      });

      // Save the updated state to local storage
      saveDataToLocalStorage('lists', newState);

      return newState;

    case CONSTANT.EDIT_CARD_TEXT: {
      const { cardId, newText } = action.payload;

      newState = state.map((list) => ({
        ...list,
        cards: list.cards.map((card) => (card.id === cardId ? { ...card, text: newText } : card)),
      }));

      // Save the updated state to local storage
      saveDataToLocalStorage('lists', newState);

      return newState;
    }

    case CONSTANT.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;

      newState = state.map((list) => {
        const newList = { ...list };
        newList.cards = [...list.cards];
        return newList;
      });

      if (droppableIdStart === droppableIdEnd) {
        const listIndex = newState.findIndex(
          (list) => droppableIdStart === String(list.id),
        );
        const card = newState[listIndex].cards[droppableIndexStart];

        newState[listIndex].cards.splice(droppableIndexStart, 1);
        newState[listIndex].cards.splice(droppableIndexEnd, 0, card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const startListIndex = newState.findIndex(
          (list) => droppableIdStart === String(list.id),
        );
        const endListIndex = newState.findIndex(
          (list) => droppableIdEnd === String(list.id),
        );

        const card = newState[startListIndex].cards[droppableIndexStart];
        newState[startListIndex].cards.splice(droppableIndexStart, 1);
        newState[endListIndex].cards.splice(droppableIndexEnd, 0, card);
      }

      // Save the updated state to local storage
      saveDataToLocalStorage('lists', newState);

      return newState;
    }

    default:
      return state;
  }
};

export default ListReducer;
