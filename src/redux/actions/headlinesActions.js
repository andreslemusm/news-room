import {
  FETCH_HEADLINES_PENDING,
  FETCH_HEADLINES_SUCCESS,
  FETCH_HEADLINES_ERROR,
} from './index';

const fetchHeadlinesPending = () => {
  return {
    type: FETCH_HEADLINES_PENDING,
  };
};

const fetchHeadlinesError = (error) => {
  return {
    type: FETCH_HEADLINES_ERROR,
    payload: error,
  };
};

const fetchHeadlinesSuccess = (data, category) => {
  return {
    type: FETCH_HEADLINES_SUCCESS,
    payload: { data, category },
  };
};

export default function fetchHeadlines(category) {
  return async (dispatch) => {
    dispatch(fetchHeadlinesPending());
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=3`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const data = await response.json();
      dispatch(fetchHeadlinesSuccess(data, category));
    } catch (error) {
      dispatch(fetchHeadlinesError(error.message));
      console.log('Error: ', error.message);
    }
  };
}
