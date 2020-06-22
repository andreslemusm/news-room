import { FETCH_TOP_NEWS_PENDING, FETCH_TOP_NEWS_SUCCESS, FETCH_TOP_NEWS_ERROR } from './index';

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

const fetchTopNewsSuccess = (data, categories) => {
  return {
    type: FETCH_TOP_NEWS_SUCCESS,
    payload: { data, categories },
  };
};

export default function fetchTopNews(categories) {
  return async (dispatch) => {
    dispatch(fetchTopNewsPending());
    try {
      const promises = categories.map((category) =>
        fetch(
          `https://api.nytimes.com/svc/topstories/v2/${category.name}.json?api-key=${process.env.REACT_APP_API_KEY}`
        )
      );
      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map(async (response) => await response.json()));
      dispatch(fetchTopNewsSuccess(data, categories));
    } catch (error) {
      dispatch(fetchTopNewsError(error.message));
      console.log('Error: ', error.message);
    }
  };
}
