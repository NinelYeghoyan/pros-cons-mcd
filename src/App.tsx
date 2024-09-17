import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Layout from '@layout/index.tsx';
import GlobalStyles from '@style/global.styled';
import theme from '@style/theme';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Layout />
        </ThemeProvider>
    );
};

export default App;
