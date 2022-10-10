import Cookies from "js-cookie";

import '../css/global.min.css';

function MyApp({ Component, pageProps }) {
  Cookies.defaults = { expires: 60 * 365 };

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;