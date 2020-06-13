/* eslint-disable linebreak-style */
import axios from 'axios'
import { FETCH_COMMUNITY_DATA_REQUEST, FETCH_COMMUNITY_DATA_SUCCESS, FETCH_COMMUNITY_DATA_FAILURE } from './actionTypes';


export const fetchCommunityDataRequest = () => ({ type: FETCH_COMMUNITY_DATA_REQUEST})
export const fetchCommunityDataSuccess = (data) => ({ type: FETCH_COMMUNITY_DATA_SUCCESS, payload: data})
export const fetchCommunityDataFailure = (error) => ({ type: FETCH_COMMUNITY_DATA_FAILURE, payload: error})




// export const fetchCommunityData = () => async (dispatch) => {
//   try {
//     dispatch(fetchCommunityDataRequest())
//     axios.get('https://my-json-server.typicode.com/johnerry/json_place_holder/')
//     .then( response => {
//       const communityData = response.data
//       dispatch(fetchCommunityDataSuccess(communityData))
//     })
//     .catch(error => {
//       const errorMessage = error.message
//       dispatch(fetchCommunityDataFailure(errorMessage))
//     })

//   } catch (error) {
//   }

// }

export const sendCommunityData = (data, type) => async (dispatch) => {
  let hm;
  type === 'post' ? ( hm = axios.post('https://johnerry.000webhostapp.com/editor.php', data)) :
   ( hm = axios.get('https://johnerry.000webhostapp.com/view.php?get_data='+data));

  try {
    dispatch(fetchCommunityDataRequest())
    // axios.post('https://johnerry.000webhostapp.com/editor.php', data)
    hm
    .then( response => {
      dispatch(fetchCommunityDataSuccess(response.data))
    })
    .catch(error => {
      const errorMessage = error.message
      dispatch(fetchCommunityDataFailure(errorMessage))
    })

  } catch (error) {
  }
}