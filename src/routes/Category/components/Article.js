import React from 'react';
import PropTypes from 'prop-types';
import { getDateFrom } from '../../../utils';
import imageNotFound from '../../../assets/image-not-found.png';

Article.propTypes = {
  post: PropTypes.object,
};

export default function Article({ post }) {
  const { title, abstract, published_date, url, multimedia, byline } = post;

  return (
    <article className="bb b--black-10">
      <a className="db pv4 ph3 ph0-l no-underline near-black dim" href={url}>
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img onError={(e) => (e.target.src = imageNotFound)} src={multimedia[0].url} className="db" alt={title} />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f5 f4-m f3-l fw7 garamond mt0 lh-title">{title}</h1>
            <p className="f6 f5-l lh-copy silver avenir">{abstract}</p>
            <p className="f6 lh-copy silver mt4 mb0 avenir">
              <span className="ttc ">{byline}</span>, <time>{getDateFrom(published_date)}</time>
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}
