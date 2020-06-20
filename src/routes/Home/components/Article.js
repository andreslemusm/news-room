import React from 'react';
import { eliminateSourceName } from '../../../utils';

export default function Article({ post, color }) {
  const { urlToImage, title, url, description, source } = post;

  return (
    <article>
      <a className="db pv4 pv0-ns ph3 no-underline near-black dim" href={url}>
        <div className="flex flex-column">
          <img src={urlToImage} className="db mw-100" alt="cat" />
          <p className={`f7 fw5 lh-copy mt3 mb2 avenir ${color}`}>
            <span className="ttu">{source.name}</span>
          </p>
          <h1 className="f5 f4-l fw7 garamond mt0 mb0 lh-title">
            {eliminateSourceName(title)}
          </h1>
          <p className="f6 lh-copy silver mb0 mt3 avenir">{description}</p>
        </div>
      </a>
    </article>
  );
}
