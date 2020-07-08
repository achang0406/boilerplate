import base from './base';

const ENDPOINT = 'libraries';

function getLibraries() {
  return base.fetchApi({
    url: `${ENDPOINT}`,
  });
}

function getLibrary(id) {
  return base.fetchApi({
    url: `${ENDPOINT}/${id}`,
  });
}

export default {
  getLibraries,
  getLibrary,
};
