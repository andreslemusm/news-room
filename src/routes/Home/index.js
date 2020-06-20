import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import Headline from './components/Headline';
import fetchHeadlines from '../../redux/actions/headlinesActions';

Home.propTypes = {
  topNews: PropTypes.arrayOf(PropTypes.object),
  fetchTopNews: PropTypes.func,
};

function Home({ categories, fetchHeadlines, headlines }) {
  // eslint-disable-next-line
  useEffect(() => {
    categories.map((category) => {
      fetchHeadlines(category.name);
    });
  }, []);

  return (
    <Layout>
      <div className="mb5 mt5">
        {Object.keys(headlines).length === 6 &&
          categories.map((category, index) => (
            <Headline
              articles={headlines[category.name]}
              key={index}
              category={category}
            />
          ))}
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { categories, headlines } = state;
  return {
    categories,
    loading: headlines.loading,
    error: headlines.error,
    headlines: headlines.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeadlines: (category) => {
      dispatch(fetchHeadlines(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
