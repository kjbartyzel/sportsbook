import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
display: flex;

li:first-child {
    label {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

    }
}

li:last-child {
    label {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
`;

const Item = styled.li`
display: block;
cursor: pointer;
text-align: center;
font-size: 14px;
@media (max-width: 768px) {
    width: 100%;
}

label {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    cursor: pointer;
    background-color: #4b525a;
    border-right: 1px solid rgba(255,255,255,0.12);

    span {
        margin-bottom: 2px;
    }
}

input {
    display: none;
}

input[type=radio]:checked + label {
    background-color: #369a00;
}

`;

class BetButtons extends React.Component {
    state = {
        selectedOption: ''
    }

    handlerOnChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    };

    render() {
        const { buttons } = this.props;

        const buttonList = buttons && buttons.map(({ label, odds, id, betOfferId }) => {
            const decimalOdds = (odds / 1000).toFixed(2);
            const labelTrimed = label.length > 15 ? `${label.substring(0,15)}...` : label;

            return (
                <Item key={id}>
                    <input id={id} value={id} type='radio'
                        checked={this.state.selectedOption === id.toString()}
                        onChange={this.handlerOnChange} />
                    <label htmlFor={id}>
                        <span>{decimalOdds}</span>
                        <p>{labelTrimed}</p>
                    </label>

                </Item>
            )
        });

        return (
            <Wrapper>
                {buttonList}
            </Wrapper>
        )
    }
}

export default BetButtons;