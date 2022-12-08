import axios from 'axios'

function getQuery(url, queryParams) {
    const target = {
        params : queryParams
    };
    return axios.get(url, target);
}

function postRequst(url, bodyParams) {
    return axios.post(url, bodyParams);
}

function postRequstFunc(url, bodyParams, successFunc, errorFunc) {
    axios.post(url, bodyParams)
    .then(successFunc)
    .catch(errorFunc);
}

export default {
    getQuery,
    postRequst,
    postRequstFunc
}