import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';

Layout.propTypes = {
  children: PropTypes.element,
};

function Layout({ children, categories }) {
  return (
    <>
      <Header subSections={categories} mainSection="today" title="Mr News" />
      <main>{children}</main>
      <Footer sections={categories} />
    </>
  );
}

const mapStateToProps = (state) => {
  const { categories } = state;
  return {
    categories,
  };
};

export default connect(mapStateToProps)(Layout);
