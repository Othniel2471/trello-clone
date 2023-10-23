import CONSTANT from '.';

const addList = (title) => ({
  type: CONSTANT.ADD_LIST,
  payload: { title },
});

const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => ({
  type: CONSTANT.DRAG_HAPPENED,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  },
});

export default addList;
export { sort };
