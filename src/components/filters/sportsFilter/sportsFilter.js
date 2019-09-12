import React from 'react'
import { connect } from 'react-redux'
import { fetchAllSports } from '../../../store/actions/eventsActions'
import { toggleSportsFilter } from '../../../store/actions/filtersActions'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const FilterWrapper = styled.div`
`;

const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

const Title = styled.p`
cursor: pointer;
svg {
    display: none;
}
@media(max-width: 768px){
    svg {
        display: inline-block;
    }
}
`;

const ResetButton = styled.p`
    cursor: pointer;
    text-decoration: underline;
    :hover {
        opacity: .7;
    }
`;

const List = styled.ul`
display: flex;
flex-wrap: wrap;

@media (max-width: 768px) {
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
}
`;

const Item = styled.li`
margin-right: 10px;
margin-bottom: 10px;

@media (max-width: 768px) {
    margin-right: 0;
}

> input[type=radio] {
    display: none;
}

> label {
    display: block;
    padding: 5px 12px;
    font-size: 14px;
    background-color: #4b525a;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 15px 12px;
    }
}

input[type=radio]:checked + label {
    background-color: #24508a;
}
`;

class SportsFilter extends React.Component {

    state = {
        selectedOption: '',
        open: false
    }
    componentDidMount() {
        this.props.fetchAllSports()
    }

    handlerOnChange = (e) => {
        const data = e.target.value === undefined  ? '' : e.target.value;

        this.setState({
            selectedOption: data
        });

        this.props.toggleSportsFilter(data);
    }

    showFilter = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { sports } = this.props;

        const sportsList = sports && sports.map((sport, index) => {
            return (
                <Item key={index}>
                    <input id={sport} value={sport} type='radio'
                        checked={this.state.selectedOption === sport}
                        onChange={this.handlerOnChange} />
                    <label htmlFor={sport}>{sport}</label>
                </Item>
            )
        })

        const openTags = !this.state.open
        ? <FontAwesomeIcon icon={faChevronDown} />
        : <FontAwesomeIcon icon={faChevronUp} />;


        return (
            <FilterWrapper>
                <TitleWrapper>
                    <Title onClick={this.showFilter}>Filter by sport: {openTags}</Title>
                    {this.state.selectedOption !== ''
                        ? <ResetButton onClick={this.handlerOnChange}>Reset filter by tag</ResetButton>
                        : ''
                    }
                </TitleWrapper>
                <List show={this.state.open}>
                    {sportsList}
                </List>
            </FilterWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    const { sports } = state.sports;

    return {
        sports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllSports: () => dispatch(fetchAllSports()),
        toggleSportsFilter: (filterName) => dispatch(toggleSportsFilter(filterName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SportsFilter);