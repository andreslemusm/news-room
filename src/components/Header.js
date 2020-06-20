import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, useParams } from 'react-router-dom';

Header.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.string,
};

export default function Header({ subSections, title, mainSection }) {
  const { category: currentCategory } = useParams();

  return (
    <header className="bg-white white tc">
      <h1 className="mv3">
        <Link
          to="/"
          className="fw5 f2 tracked near-black no-underline ttu avenir"
        >
          {title}
        </Link>
      </h1>
      <nav className="bb b--black-10 mh4-l">
        <ul className="list flex justify-center-ns overflow-auto bt b--near-black bw3 tc pa0 ma0">
          <li className="ph3 ph4-l">
            <NavLink
              className="dark-red fw1 f6 f5-l ttc no-underline garamond"
              to="/"
            >
              <span
                className={`${
                  currentCategory !== undefined && 'b--transparent'
                } b--dark-red dib bb bw1 pv3 hover-b--dark-red`}
              >
                {mainSection}
              </span>
            </NavLink>
          </li>
          {subSections.map((section, index) => (
            <li className="ph3 ph4-l" key={index}>
              <NavLink
                className="near-black fw1 f6 f5-l ttc no-underline garamond"
                to={`/${section.name}`}
              >
                <span
                  className={`${
                    section.name !== currentCategory && 'b--transparent'
                  } b--near-black dib bb bw1 pv3 hover-b--near-black`}
                >
                  {section.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
