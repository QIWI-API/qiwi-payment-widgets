import './style.css';
import {getContrastColorByBackground} from '../../modules/helpers';
import {styleCode, color} from '../../modules/styles';
import ErrorInfo from '../../modules/ErrorInfo'

export default function Desc ({showFromStart = true} = {}) {
    const desc = document.createElement('div');

    desc.className = 'widget__text';

    desc.innerHTML = ``;

    const component = {
        changeText: (text = '', text_Error = '') => {
            desc.innerHTML = text + text_Error;
        },
        changeColor: (backgroundColor) => {
            desc.style.color = getContrastColorByBackground(backgroundColor);
        },
        init: (data) => {
            if (showFromStart) {
                component.changeText(data.widgetDescription);
                const bgColor = data.widgetStyles[styleCode.WIDGET_BACKGROUND] || color.WHITE;
                component.changeColor(bgColor);
            } else {
                component.element.style.display = 'none';
            }
        },
        dispose: (data) => {
            let text = `Свяжитесь с администратором сайта или <a class="widget__mail" href="mailto:widget@qiwi.com">напишите в поддержку</a>`;
            let text_Error = `<br>Описание ошибки: ${data.erroreText || data + ' (вероятнее всего, ошибка в коде)'}</br> <br>Код статуса: ${data.errorStatus}</br> <br>Описание кода ошибки: ${data.errorStatusText}</br><br>Url: ${data.errorUrl}</br>  `;
            if (!showFromStart) {
                component.element.classList.add('widget__desc--error');
                text = `Свяжитесь <br>с администратором сайта <br>или <a class="widget__mail" href="mailto:widget@qiwi.com">напишите в поддержку</a>`
                text_Error = `<br>${data.erroreText}</br>`
            }
            component.changeText(text, text_Error);
        },
        element: desc
    };

    return component;
}
