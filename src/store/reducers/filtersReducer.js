import *  as type from '../../constants/filtersConstants'

const initState = {
    tagsFilter: '',
    sportsFilter: ''
}

export const filtersReducers = (state = initState, action) => {
    switch (action.type) {
        case type.TOGGLE_SPORTS_FILTER:
            return {
                ...state,
                sportsFilter: action.payload
            }
        case type.TOGGLE_TAGS_FILTER:
            return {
                ...state,
                tagsFilter: action.payload
            }
        default:
            return state;
    }
}