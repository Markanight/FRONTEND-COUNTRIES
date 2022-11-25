import axios from 'axios'

const URL = "https://backend-countries-production.up.railway.app/"

export function getCountries(){
    return async function(dispatch){
        const json = await axios(URL + 'countries')
        return dispatch({
            type: 'STORE_COUNTRIES',
            payload: json.data
        })
    }
}
export function getCountryData(id){
    return async function(dispatch){
        const json = await axios(URL + id)
        return dispatch({
            type: 'STORE_COUNTRY_DETAIL',
            payload: json.data
        })
    }
}

export function getNameCountry(name){
    return async function(dispatch) {
            var json = await axios.get(URL + "countries?name=" + name)
            return dispatch({
                type : 'GET_NAME_COUNTRY',
                payload : json.data
            })
    }
}

export function getAllActivities(){
    return async function(dispatch){
        const json = await axios.get(URL + 'activities')
        return dispatch({
            type : 'GET_ALL_ACTIVITIES',
            payload : json.data
        })
    }
}

export function getFilterActivity(payload) {
    return {
        type : 'GET_FILTER_ACTIVITY',
        payload
    }
}

export function getFilterPopulation(payload) {
        return {
            type : 'GET_FILTER_POPULATION',
            payload
        }
}


export function getFilterContinent(payload) {
    return function (dispatch) {
        return dispatch({
            type : 'GET_FILTER_CONTINENT',
            payload
        })
    }
}

export function getFilterAlphabet(payload) {
    return function (dispatch) {
        return dispatch({
            type : 'GET_FILTER_ALPHABET',
            payload
        })
    }
}

export function createActivity(input){
    return async function(dispatch){
        const json = await axios.post(URL + 'activities', input)
        return dispatch({
            type : 'POST_ACT',
            payload : json.data
        })
    }
} 

