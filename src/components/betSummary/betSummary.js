import React from 'react'
import BetButtons from '../layout/buttons/betButtons'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
position: absolute;
right: 20px;
bottom: 20px;
@media (max-width: 768px) {
    position: relative;
    right: initial;
    bottom: initial;
}
`;

export const BetSummary = ({ betOffers }) => {
    if (betOffers.length > 0) {
        return (
            <ButtonWrapper>
                <BetButtons buttons={betOffers[0].outcomes}></BetButtons>
            </ButtonWrapper>
        )
    } else {
        return (
            <ButtonWrapper>
                <p>No bet offers</p>
            </ButtonWrapper>
        )
    }

}