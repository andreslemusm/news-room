import {
  FETCH_HEADLINES_PENDING,
  FETCH_HEADLINES_SUCCESS,
  FETCH_HEADLINES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  categories: {},
  error: null,
};

export default function headlinesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HEADLINES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HEADLINES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: {
          ...state.categories,
          [action.payload.category]: action.payload.data.articles,
        },
      };
    case FETCH_HEADLINES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
