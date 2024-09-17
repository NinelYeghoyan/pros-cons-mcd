import { FC } from 'react';

import StyledHeader from '@layout/Header/styled';

const Header: FC = () => {
    return (
        <StyledHeader className="header flex-center">
            <h2 className="header__title">Should I eat at McDonald&apos;s?</h2>
        </StyledHeader>
    );
};

export default Header;
