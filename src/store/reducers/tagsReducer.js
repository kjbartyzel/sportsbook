import * as type from '../../constants/tagsConstants'
const initState = {
    tags: []
}

export const tagsReducer = (state = initState, action) => {
    switch (action.type) {
        case type.FETCH_ALL_TAGS:
            return {
                tags: action.payload
            }
        default:
            return state;
    }
}