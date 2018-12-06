import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';


export const getQuote = (data) => {
    return {
        type: actionTypes.GET_QUOTE,
        payload: {
            quote: data.quote,
            author: data.author,
            title: data.title
        }
    }
}


export const quote = () => {
    return dispatch => {
        axios.get('http://quotes.rest/qod.json?category=love')
        .then(response => {
            console.log(response.data.contents.quotes[0])
            dispatch(getQuote(response.data.contents.quotes[0]))
        })
        .catch(error => {
            console.log(error)
        })
    }
}