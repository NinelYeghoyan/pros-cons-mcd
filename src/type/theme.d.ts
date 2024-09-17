import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fontFamily: {
                roboto: string;
                condensed: string;
            };

            fontSize: {
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                p38: string;
                p36: string;
                p34: string;
                p32: string;
                p30: string;
                p28: string;
                p26: string;
                p24: string;
                p22: string;
                p20: string;
                p18: string;
                p16: string;
                p14: string;
                p12: string;
                p10: string;
                p8: string;
            };

            weight: {
                thin: number;
                light: number;
                regular: number;
                medium: number;
                bold: number;
                black: number;
            };
        };

        borderRadius: {
            radius2: string;
            radius4: string;
            radius6: string;
            radius8: string;
            radius10: string;
            radius12: string;
        };

        palette: {
            white: string;
            black: string;
            red: string;
            green: string;
            orange: string;
            blue: string;

            base: string;
            primary: string;
            secondary: string;
            accent: string;

            primaryTextColor: string;
            secondaryTextColor: string;

            scrollbarBackgroundColor: string;
        };
    }
}
