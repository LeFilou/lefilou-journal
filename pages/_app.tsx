import { AppProps } from 'next/app';
import BaseLayout from '../components/_layouts/BaseLayout/BaseLayout';
import GlobalStyles from '../styles/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyles />
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    </>
);

export default MyApp;
