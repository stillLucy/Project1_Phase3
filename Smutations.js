export default {
    addComment(state, payload) {
      state.comments.push(payload);
      return state;
    }
  };
