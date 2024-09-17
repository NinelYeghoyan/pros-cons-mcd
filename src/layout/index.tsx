import { FC } from 'react';

import Header from '@layout/Header';
import Main from '@layout/Main';
import StyledLayout from '@layout/styled.ts';

const Layout: FC = () => {
    return (
        <StyledLayout className="layout">
            <Header />

            <Main />
        </StyledLayout>
    );
};

export default Layout;
