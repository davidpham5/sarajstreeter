import Page from '../components/Page';
import '../styles/globals.css'
import PlausibleProvider from 'next-plausible'
function Application({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="sarajstreeter.com">
      <Page>
        <Component {...pageProps} />
      </Page>
    </PlausibleProvider>
  )
}

export default Application
