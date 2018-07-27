import './style.css';
import {getContrastColorByBackground, convertHexToRgb} from '../../modules/helpers';
import {styleCode} from '../../modules/styles';

export default function Button ({
    classes = '',
    title = 'Помочь'
} = {}) {
    const container = document.createElement('div');

    container.innerHTML = `<button type="button" id="make-donation" class="widget__button ${classes}"></button>`;

    const button = container.firstChild;
    button.innerHTML = title;

    const component = {
        element: button,
        text: title,
        setClickHandler: (handler) => {
            component.element.addEventListener('click', handler);
        },
        _changeText: (text = 'Помочь') => {
            component.element.innerHTML = text;
        },
        _changeBackgroundColor: (color) => {
            component.element.style.backgroundColor = color;
            component.element.style.color = getContrastColorByBackground(color);
        },
        disable: () => {
            component._changeText('Ошибка');
            component.element.disabled = true;
        },
        enable: () => {
            component._changeText(component.text);
            component.element.disabled = false;
        },
        init: (data) => {
            component.text = data.widgetButtonText || title;
            component._changeText(component.text);
            if (data.widgetStyles[styleCode.BUTTON_BACKGROUND]) {
                component._changeBackgroundColor(data.widgetStyles[styleCode.BUTTON_BACKGROUND]);
                if (classes.includes('widget__button-shadow') && convertHexToRgb(data.widgetStyles[styleCode.BUTTON_BACKGROUND])) {
                    const rgbColor = convertHexToRgb(data.widgetStyles[styleCode.BUTTON_BACKGROUND]);
                    component.element.style.boxShadow = `0 12px 15px 0 rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2)`;
                }
            }
            component.enable();
        },
        dispose: () => {
            component.disable();
            component.element.style.display = 'none';
        }
    };

    return component;
}