import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

export default function Headline({ articles, category }) {
  return (
    <section className="mw8 center mt4 mt5-ns">
      <div className="mb3-ns flex justify-between items-center">
        <h2 className={`ml3 ml4-ns ma0 ttu fw5 f4 ${category.color}`}>
          {category.name}
        </h2>
        <Link
          className="link underline mr3 mr4-ns mid-gray f7 f6-l avenir tracked-tight hover-silver"
          to={`/${category.name}`}
        >
          All news
        </Link>
      </div>
      <div className="cf ph3-ns">
        {articles.map((article, index) => (
          <div className="fl w-100 w-third-ns" key={index}>
            <Article post={article} color={category.color} />
          </div>
        ))}
      </div>
    </section>
  );
}
