import {
  FETCH_TOP_NEWS_PENDING,
  FETCH_TOP_NEWS_SUCCESS,
  FETCH_TOP_NEWS_ERROR,
} from './index';

const fetchTopNewsPending = () => {
  return {
    type: FETCH_TOP_NEWS_PENDING,
  };
};

const fetchTopNewsError = (error) => {
  return {
    type: FETCH_TOP_NEWS_ERROR,
    payload: error,
  };
};

const fetchTopNewsSuccess = (data) => {
  return {
    type: FETCH_TOP_NEWS_SUCCESS,
    payload: data,
  };
};

export default function fetchTopNews(category, page) {
  return async (dispatch) => {
    dispatch(fetchTopNewsPending());
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&country=us&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const data = await response.json();
      dispatch(fetchTopNewsSuccess(data));
    } catch (error) {
      dispatch(fetchTopNewsError(error.message));
      console.log('Error: ', error.message);
    }
  };
}
