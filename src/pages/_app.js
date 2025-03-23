import "../styles/main.scss";
import "../styles/_footer.scss"; // لو محتاجه يكون متاح لكل الصفحات

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
