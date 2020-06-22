import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import Headline from './components/Headline';
import fetchTopNews from '../../redux/actions/topNewsActions';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import { isUndefined } from '../../utils';

const renderArticlesFrom = (data, sections) => {
  if (isUndefined(data)) {
    return <></>;
  } else {
    return sections.map((section) => <Headline articles={data[section.name]} key={section.name} category={section} />);
  }
};

const renderContentFrom = (data, loading, sections) => {
  if (loading === true) {
    return <Spinner />;
  } else {
    return renderArticlesFrom(data, sections);
  }
};

Home.propTypes = {
  topNews: PropTypes.objectOf(PropTypes.array),
  fetchTopNews: PropTypes.func,
};

function Home({ categories, fetchTopNews, topNews, loading, error }) {
  useEffect(() => {
    fetchTopNews(categories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <Layout>
      <div className="mb5 mt5">{!isUndefined(error) ? <Error /> : renderContentFrom(topNews, loading, categories)}</div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { categories, topNews } = state;

  return {
    categories,
    loading: topNews.loading,
    error: topNews.error,
    topNews: topNews.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopNews: (categories) => {
      dispatch(fetchTopNews(categories));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
