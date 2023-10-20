const initialState = [
  {
    title: 'Last Episode',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'we created a static list and a static card',
      },
      {
        id: 1,
        text: 'we used a mix between material UI React and styled components',
      },
    ],
  },
  {
    title: 'Another one',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'we created a static list and a static card',
      },
      {
        id: 1,
        text: 'we used a mix between material UI React and styled components',
      },
    ],
  },
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
