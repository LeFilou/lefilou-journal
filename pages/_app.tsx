import { AppProps } from 'next/app';
import BaseLayout from '@/components/_layouts/BaseLayout/BaseLayout';
import { fontVariables } from '@/styles/fonts';
import '@/styles/globals.css';
import '@/styles/prism-themes/prism-material-oceanic.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <div className={`${fontVariables} font-sans`}>
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    </div>
);

export default MyApp;
