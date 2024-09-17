import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
    typography: {
        fontFamily: {
            roboto: 'Roboto',
            condensed: 'Roboto Condensed',
        },

        fontSize: {
            h1: '50px',
            h2: '48px',
            h3: '46px',
            h4: '44px',
            h5: '42px',
            h6: '40px',
            p38: '38px',
            p36: '36px',
            p34: '34px',
            p32: '32px',
            p30: '30px',
            p28: '28px',
            p26: '26px',
            p24: '24px',
            p22: '22px',
            p20: '20px',
            p18: '18px',
            p16: '16px',
            p14: '14px',
            p12: '12px',
            p10: '10px',
            p8: '8px',
        },

        weight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
            black: 900,
        },
    },

    borderRadius: {
        radius2: '2px',
        radius4: '4px',
        radius6: '6px',
        radius8: '8px',
        radius10: '10px',
        radius12: '12px',
    },

    palette: {
        white: '#ffffff',
        black: '#000000',
        red: '#f14644',
        green: '#72B59B',
        orange: '#FFAD00',
        blue: '#42229D',

        base: '#242529',
        primary: '#36383e',
        secondary: '#363538',
        accent: '#fff37a',

        primaryTextColor: '#fdebdd',
        secondaryTextColor: '#8e8885',

        scrollbarBackgroundColor: '#333333',
    },
};

export default defaultTheme;
