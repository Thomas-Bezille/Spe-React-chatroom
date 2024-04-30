const initialState = {
  // State initial
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      text: 'Salut',
    },
    {
      id: 2,
      author: 'Super Chat',
      text: 'Comment chat va ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      text: "T'as pas des super croquettes ?",
    },
  ],
  inputMessage: '',
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;
