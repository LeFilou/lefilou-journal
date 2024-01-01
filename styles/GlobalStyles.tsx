// styles/GlobalStyles.js
import { Global, css } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;300;400;700&family=Roboto:wght@100;300;400;700&family=Abril+Fatface&display=swap');
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);

export default GlobalStyles;
