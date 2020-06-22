import React from 'react';

export default function Article({ post, color }) {
  const { multimedia, title, url, abstract, des_facet } = post;

  return (
    <article>
      <a className="db pv4 pv0-ns ph3 no-underline near-black dim" href={url}>
        <div className="flex flex-column">
          <img src={multimedia[0].url} className="db mw-100" alt={multimedia[0].caption} />
          <p className={`f7 fw5 lh-copy mt3 mb2 avenir ttu ${color}`}>{des_facet[0]}</p>
          <h1 className="f5 f4-l fw7 garamond mt0 mb0 lh-title">{title}</h1>
          <p className="f6 lh-copy silver mb0 mt3 avenir">{abstract}</p>
        </div>
      </a>
    </article>
  );
}
