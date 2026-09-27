import { Abril_Fatface, Roboto, Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700'],
    variable: '--font-roboto-condensed',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700'],
    variable: '--font-roboto',
});

const abrilFatface = Abril_Fatface({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-abril-fatface',
});

export const fontVariables = [
    robotoCondensed.variable,
    roboto.variable,
    abrilFatface.variable,
].join(' ');
