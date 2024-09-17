import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 64px;
    border-bottom: 3px solid ${(p) => p.theme.palette.accent};

    .header__title {
        font-family: ${(p) => p.theme.typography.fontFamily.condensed}, sans-serif;
        font-size: ${(p) => p.theme.typography.fontSize.p26};
        font-weight: ${(p) => p.theme.typography.weight.bold};
        text-align: center;
        line-height: 26px;

        color: ${(p) => p.theme.palette.primaryTextColor};
    }
`;

export default StyledHeader;
