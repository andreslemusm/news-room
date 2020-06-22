import { FETCH_TOP_NEWS_PENDING, FETCH_TOP_NEWS_SUCCESS, FETCH_TOP_NEWS_ERROR } from '../actions';

const INITIAL_STATE = {
  loading: false,
  categories: {},
  error: null,
};

export default function topNewsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TOP_NEWS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOP_NEWS_SUCCESS:
      const { data, categories } = action.payload;
      return {
        ...state,
        loading: false,
        categories: {
          ...state.categories,
          ...data.reduce((accum, categoryData, index) => {
            return { ...accum, [categories[index].name]: categoryData.results };
          }, {}),
        },
      };
    case FETCH_TOP_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
