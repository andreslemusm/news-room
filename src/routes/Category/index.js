import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Article from './components/Article';
import { connect } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { maxPageOf, isUndefined, firstItemFrom, lastItemFrom } from '../../utils';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

const renderArticlesFrom = (data, page) => {
  if (isUndefined(data)) {
    return <></>;
  } else {
    return data
      .slice(firstItemFrom(page), lastItemFrom(page, data.length))
      .map((article, index) => <Article key={index} post={article} />);
  }
};

const renderContentFrom = (data, page, loading) => {
  if (loading === true) {
    return <Spinner />;
  } else {
    return renderArticlesFrom(data, page);
  }
};

Category.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  results: PropTypes.number,
  loading: PropTypes.bool,
};

function Category({ categories, error, loading }) {
  const { category, page } = useParams();
  const { [category]: articles } = categories;
  const results = articles !== undefined && articles.length;

  if (!isUndefined(error)) {
    toast.error(`Error: ${error}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Layout>
      <section className="mw7 center">
        <div className="mv0 pv4 ph3 ph0-l b--black-10 bb">
          <h2 className="garamond mt0 mb3 fw1 near-black f2 center tc ttc">{category}</h2>
          <span className="silver avenir tc db fw4 f6">
            {`Showing ${firstItemFrom(page)} - ${lastItemFrom(page, results)} of ${results} results`}
          </span>
        </div>
        {!isUndefined(error) ? <Error /> : renderContentFrom(articles, page, loading)}
        <div className="flex items-center justify-between justify-center-ns ph3 pv3 mb5 bb b--black-10">
          <NavLink
            to={`/${category}/${Number.parseInt(page) - 1}`}
            activeStyle={{ pointerEvents: 'auto', color: '#111' }}
            style={{ pointerEvents: 'none' }}
            isActive={() => (Number.parseInt(page) === 1 ? false : true)}
            className="silver avenir no-underline f6 f5-l inline-flex items-center pv2 pr3 border-box"
          >
            <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
            </svg>
            <span className="pl1">Previous page</span>
          </NavLink>
          <NavLink
            to={`/${category}/${Number.parseInt(page) + 1}`}
            activeStyle={{ pointerEvents: 'auto', color: '#111' }}
            style={{ pointerEvents: 'none' }}
            isActive={() => (Number.parseInt(page) === maxPageOf(results) ? false : true)}
            className="silver avenir no-underline f6 f5-l inline-flex items-center pv2 pl3 border-box"
          >
            <span className="pr1">Next page</span>
            <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
              <title>chevronRight icon</title>
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
            </svg>
          </NavLink>
        </div>
      </section>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { topNews } = state;

  return {
    error: topNews.error,
    categories: topNews.categories,
    loading: topNews.loading,
  };
};

export default connect(mapStateToProps)(Category);
