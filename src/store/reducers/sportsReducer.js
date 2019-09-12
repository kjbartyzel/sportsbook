import * as type from '../../constants/sportsConstants'

const initState = {
    sports: []
}

export const sportsReducer = (state = initState, action) => {

    switch (action.type) {
        case type.FETCH_ALL_SPORTS:
            return {
                sports: action.payload
            }
        default:
            return state;
    }
}