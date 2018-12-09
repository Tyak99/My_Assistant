import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';
import { Location } from 'variables/general';


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
        axios.get('http://quotes.rest/qod.json')
        .then(response => {
            console.log(response.data.contents.quotes[0])
            dispatch(getQuote(response.data.contents.quotes[0]))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const location = (location) => {
    return {
        type: actionTypes.GET_LOCATION,
        data: location
    }
}

export const getLocation = () => {
    return dispatch => {
        axios.get(Location)
        .then(response => {
            const mylocation = `${response.data.city}, ${response.data.country_name}`
            dispatch(location(mylocation))
            console.log(mylocation)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
