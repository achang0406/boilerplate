import base from './base';

const ENDPOINT = '/persons';

function getPersons() {
  return base.fetchApi({
    url: `${ENDPOINT}`,
  });
}

function getPerson(id) {
  return base.fetchApi({
    url: `${ENDPOINT}/${id}`,
  });
}

export default {
  getPersons,
  getPerson,
};
