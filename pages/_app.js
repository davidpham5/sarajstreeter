import Page from '../components/Page';
import '../styles/globals.css'

function Application({ Component, pageProps }) {
  return <Page> <Component {...pageProps} / > </Page>
}

export default Application
