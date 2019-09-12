import { combineReducers } from "redux";
import { filtersReducers } from "./filtersReducer";
import { eventsReducer } from "./eventsReducer";
import { tagsReducer } from "./tagsReducer";
import { sportsReducer } from "./sportsReducer";

const rootReducer = combineReducers({
    filters: filtersReducers,
    events: eventsReducer,
    tags: tagsReducer,
    sports: sportsReducer
});

export default rootReducer;