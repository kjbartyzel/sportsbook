import response from '../../_mockupData/sport-events.json'
import * as typeEvents from '../../constants/eventsConstants'
import * as typeTags from '../../constants/tagsConstants'
import * as typeSports from '../../constants/sportsConstants'
import _ from 'lodash'

const eventsData = response.events;

export const fetchAllEvents = () => {

    return (dispatch, getState) => {
        dispatch({
            type: typeEvents.FETCH_ALL_EVENTS,
            payload: eventsData
        })
    }

}

export const fetchAllTags = () => {
    let tagsData = [];
    eventsData.forEach(({ event }) => {
        tagsData = _.union(tagsData, event.tags);
    })

    return (dispatch, getState) => {
        dispatch({
            type: typeTags.FETCH_ALL_TAGS,
            payload: tagsData
        })
    }
}

export const fetchAllSports = () => {
    let sportsData = [];
    eventsData.forEach(({ event }) => {
        if(sportsData.indexOf(event.sport) === -1){
            sportsData.push(event.sport)
        }
    });

    return (dispatch, getState) => {
        dispatch({
            type: typeSports.FETCH_ALL_SPORTS,
            payload: sportsData
        })
    }
}
