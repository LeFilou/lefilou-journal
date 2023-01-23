import { AppProps } from 'next/app';
import BaseLayout from '../components/_layouts/BaseLayout/BaseLayout';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <BaseStyles />
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    </>
);

export default MyApp;
