
import '../styles/global.css'; // 스타일 시트를 가져옵니다.
import { Provider } from 'react-redux';
import store from '../store/store'; // Redux 스토어 가져오기

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}> {/* Redux 스토어를 제공합니다 */}
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
