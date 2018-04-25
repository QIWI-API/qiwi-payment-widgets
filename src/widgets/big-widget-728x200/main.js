import Widget from '../../modules/widget';

import Title from '../../components/Title';
import PaymentIcons from '../../components/PaymentIcons';
import Desc from '../../components/Desc';
import Link from '../../components/Link';
import Forms from '../../components/Forms';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Variants from '../../components/Variants';
import Block from '../../components/Block';
import Oferta from '../../components/Oferta';

import './css/styles.css';

let defaultVariants = [50, 100, 500];

const widgetTitle = Title();
const widgetPaymentIcons = PaymentIcons();
const widgetDesc = Desc();
const widgetLink = Link();
const widgetOferta = Oferta();
const widgetFormTrigger = Button({
    classes: 'widget__button--inline',
    title: 'Другая сумма'
});
const widgetBlock = Block([widgetPaymentIcons, widgetOferta, widgetLink], 'widget__footer');

const widgetVariants = Variants({ defaultVariants });

const widgetForm = Form();

const widgetForms = Forms([
    {
        form: widgetVariants,
        triggerToNext: widgetFormTrigger
    },
    {
        form: widgetForm
    }
]);

const elements = [widgetTitle, widgetDesc, widgetForms, widgetBlock];

const bigWidget728x200 = new Widget(elements);

bigWidget728x200.init();
