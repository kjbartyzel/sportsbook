import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/layout/header/header'
import Events from './components/events/events';
import TagsFilter from './components/filters/tagsFilter/tagsFilter'
import SportsFilter from './components/filters/sportsFilter/sportsFilter';

const Wrapper = styled.div`
max-width: 1440px;
margin: 0 auto;
display: flex;
flex-direction: column;
`;

const FiltersWrapper = styled.div`
border-radius: 5px;
padding: 10px 15px;
margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
margin: 0 15px;
`;

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Wrapper>
          <FiltersWrapper>
            <TagsFilter />
          </FiltersWrapper>
          <FiltersWrapper>
            <SportsFilter />
          </FiltersWrapper>
          <ContentWrapper>
            <Events />
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
