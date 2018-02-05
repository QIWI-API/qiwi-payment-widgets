import './css/styles.css';
import WidgetButton from '../../components/widget-button';

const smallWdiget300x180 = new WidgetButton();

smallWdiget300x180.init({
    redirect: {
        id: 'make-donation'
    },
    title: {
        id: 'merchant-title'
    }
});
