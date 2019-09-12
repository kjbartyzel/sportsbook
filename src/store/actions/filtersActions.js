import * as type from '../../constants/filtersConstants'

export const toggleSportsFilter = (filterName) => {
    return (dispatch, getState) => {
        dispatch({
            type: type.TOGGLE_SPORTS_FILTER,
            payload: filterName
        })
    }
}


export const toggleTagsFilter = (filterName) => {
    return (dispatch, getState) => {
        dispatch({
            type: type.TOGGLE_TAGS_FILTER,
            payload: filterName
        })
    }
}