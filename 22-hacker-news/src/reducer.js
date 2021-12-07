import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === SET_STORIES) {
    return {
      ...state,
      loading: false,
      stories: action.payload.hits,
      nbPages: action.payload.nbPages,
      page: action.payload.page,
    };
  }
  if (action.type === HANDLE_SEARCH) {
    return { ...state, query: action.payload };
  }
  if (action.type === HANDLE_PAGE) {
    if (action.payload === 'inc') {
      let newPage = state.page + 1;
      if (newPage > state.nbPages - 1) {
        newPage = 0;
      }
      return { ...state, page: newPage };
    } else {
      let newPage = state.page - 1;
      if (newPage < 0) {
        newPage = state.nbPages - 1;
      }
      return { ...state, page: newPage };
    }
  }
  if (action.type === REMOVE_STORY) {
    return {
      ...state,
      stories: state.stories.filter((item) => item.objectID !== action.payload),
    };
  }
};
export default reducer;
