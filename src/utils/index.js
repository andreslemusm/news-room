export const getDateFrom = (date) => new Date(date).toDateString();

export const eliminateSourceName = (title) => title.split(' - ')[0];

export const getSourceName = (title) => title.split(' - ')[1];

export const maxPageOf = (results) => Math.ceil(results / 10);

export const isUndefined = (value) => (value === null || value === undefined ? true : false);

export const firstItemFrom = (page) => 1 + 10 * (page - 1);

export const lastItemFrom = (page, results) => (10 + 10 * (page - 1) < results ? 10 + 10 * (page - 1) : results);
