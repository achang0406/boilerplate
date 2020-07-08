import base from './base';

const ENDPOINT = 'books';

function getBooks() {
  return base.fetchApi({
    url: `${ENDPOINT}`,
  });
}

function getBook(id) {
  return base.fetchApi({
    url: `${ENDPOINT}/${id}`,
  });
}

export default {
  getBooks,
  getBook,
};
