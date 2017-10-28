import axios from 'axios';

const GET_LEVEL = 'GET_LEVEL';

const getLevel = (level) => {
  return {
    type: GET_LEVEL,
    level
  }
}

export const fetchLevel = (id) => {
  return dispatch => {
    return axios.get(`/api/levels/${id}`)
    .then(res => res.data)
    .then(level => dispatch(getLevel(level)));
  }
}
const initialState = fetchLevel(0);

const reducer = (level = initialState, action) => {
  switch (action.type) {
    case GET_LEVEL:
      return action.level
    default:
      return level
  }
}

export default reducer;
