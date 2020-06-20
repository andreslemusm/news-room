import {
  FETCH_TOP_NEWS_PENDING,
  FETCH_TOP_NEWS_ERROR,
  FETCH_TOP_NEWS_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  articles: [],
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
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        results: action.payload.totalResults,
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
