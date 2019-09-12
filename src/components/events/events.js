import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../store/actions/eventsActions';
import moment from 'moment'
import { BetSummary } from '../betSummary/betSummary';

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: start;
`;
const Item = styled.div`
width: 32%;
margin-right: 2%;
background-color: #272c33;
margin-bottom: 30px;
padding: 20px;
position: relative;

&:nth-child(3n) {
    margin-right: 0;
}

@media (max-width: 992px) {
    width: 49%;

    &:nth-child(3n) {
        margin-right: 2%;
    }
    &:nth-child(2n) {
        margin-right: 0;
    }
}

@media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
}
`;
const ItemSummary = styled.div`
min-height: 150px;

@media (max-width: 992px) {
    min-height: 170px;
}

@media (max-width: 768px) {
    min-height: initial;
    margin-bottom: 10px;
}
`;

const Name = styled.h3`
`;


const Time = styled.p`
margin-bottom: 10px;
`;

const Desc = styled.p`
position: absolute;
right: 20px;
top: 20px;
`;

class Events extends React.Component {

    componentDidMount() {
        this.props.fetchAllEvents();
    }

    render() {
        const { events } = this.props;

        const eventsList = events && events.map(({ event, betOffers }) => {
            return (
                <Item key={event.id}>
                    <ItemSummary>
                        <Time>{moment(event.start).format('h:mm a')} {moment(event.start).format('MMMM Do YYYY')}</Time>
                        <Name>{event.name}</Name>
                        <Desc>{event.sport}</Desc>
                    </ItemSummary>
                    <BetSummary betOffers={betOffers} />
                </Item>
            )
        });

        return (
            <List>
                {eventsList}
            </List >
        )
    }

}

const mapStateToProps = (state) => {
    let { events } = state.events;
    const { sportsFilter, tagsFilter } = state.filters;

    events = sportsFilter === ''
        ? events
        : events.filter(({ event }) => event.sport === sportsFilter);

    events = tagsFilter === ''
        ? events
        : events.filter(({ event }) => event.tags.indexOf(tagsFilter) > -1);

    return {
        events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllEvents: () => dispatch(fetchAllEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);