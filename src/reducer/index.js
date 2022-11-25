const initialState = {
    countries : [],
    countryDetail : [],
    allActivities : [],
    allContinents: [],
    population : [],
    alphabetic : [],
    activities : [],
    post : []


}


function rootReducer (state = initialState, action) {
   switch(action.type){
    case 'STORE_COUNTRIES' :
        return {
            ...state,
            countries: action.payload,
            population: action.payload,
            allContinents : action.payload,
            alphabetic : action.payload,
            allActivities : action.payload
        }
    case 'STORE_COUNTRY_DETAIL' :
        return {
            ...state,
            countryDetail: action.payload

        }

    case 'POST_ACT' : 
        return {
            ...state,
            post: action.payload
        }

    case 'GET_NAME_COUNTRY' :
        return {
            ...state,
            countries: action.payload
        }

    case 'GET_ALL_ACTIVITIES' :
        return {
            ...state,
            activities : action.payload.sort((a, b) => {
                if (a.name > b.name){
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }
                return 0
            })
        }

    case 'GET_FILTER_POPULATION' :
        const population = state.population
        const filterMin = action.payload === 'Min' ?
        population.sort((a, b)=>{
            if(a.population > b.population){
               return  1
            }
            if (b.population > a.population){
                return -1
            }
            return 0
        }) : 
        population.sort((a, b)=>{
            if(a.population > b.population){
               return  -1
            }
            if (b.population > a.population){
                return 1
            }
            return 0
        })
        return {
            ...state,
            countries : filterMin
        }

    case 'GET_FILTER_CONTINENT' :
        const allContinents = state.allContinents
        const filterContinent = allContinents.filter((country) => country.continent === action.payload)
        return {
            ...state,
            countries : action.payload === 'All' ? allContinents : filterContinent
        }

    case 'GET_FILTER_ACTIVITY' :
        const allActivities = state.allActivities
        const filterActivity = action.payload === 'All' ? allActivities.filter((country) => country.activities.length > 0) :
                               allActivities.filter((country)=> country.activities.find((activity)=> activity.name.toLowerCase() === action.payload))
    return {
        ...state,
        countries : filterActivity
    }
    
    case 'GET_FILTER_ALPHABET' :
        const alphabet = state.alphabetic
        const alphabeticOrder = action.payload === 'Asc' ? 
        alphabet.sort((a, b) => {
            if (a.name > b.name){
                return 1
            }
            if(a.name < b.name){
                return -1
            }
            return 0
        }) :
        alphabet.sort((a, b) => {
            if (a.name > b.name){
                return -1
            }
            if(a.name < b.name){
                return 1
            }
            return 0
        })
        return {
            ...state,
            countries : alphabeticOrder
        }

    default :
    return state
   }
}
export default rootReducer