import styled from 'styled-components';

const StyledItem = styled.div`
    flex-basis: 50%;

    .item__title {
        font-family: ${(p) => p.theme.typography.fontFamily.condensed}, sans-serif;
        font-size: ${(p) => p.theme.typography.fontSize.p20};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        text-transform: uppercase;
        text-align: center;
        line-height: 20px;

        padding-bottom: 16px;
        color: ${(p) => p.theme.palette.secondaryTextColor};
    }

    .item__list {
        height: calc(100% - 38px);
        overflow: auto;

        border-radius: ${(p) => p.theme.borderRadius.radius12};
        background-color: ${(p) => p.theme.palette.secondary};
        padding: 12px;

        > li {
            height: 40px;

            border-radius: ${(p) => p.theme.borderRadius.radius10};
            padding-right: 12px;
            padding-left: 12px;
            background-color: ${(p) => p.theme.palette.base};

            ~ li {
                margin-top: 4px;
            }
        }
    }

    .item__count {
        font-size: ${(p) => p.theme.typography.fontSize.p12};
        font-weight: ${(p) => p.theme.typography.weight.bold};
        line-height: 8px;

        color: ${(p) => p.theme.palette.accent};
    }

    .item__input,
    .item__text {
        font-size: ${(p) => p.theme.typography.fontSize.p16};
        font-weight: ${(p) => p.theme.typography.weight.regular};
        text-transform: capitalize;

        margin-left: 4px;
        color: ${(p) => p.theme.palette.secondaryTextColor};
    }

    .item__input {
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;

        border: none;
        padding: 0;
        background-color: transparent;
        outline: none;
    }
`;

export default StyledItem;
