import * as type from '../../constants/eventsConstants';

const initState = {
    events: []
}

export const eventsReducer = (state = initState, action) => {

    switch (action.type) {
        case type.FETCH_ALL_EVENTS:
            return {
                events: action.payload
            };
        default:
            return state;
    }
}