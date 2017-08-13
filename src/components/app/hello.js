import firebase from '../../../node_modules/firebase'
import db from '../../firebase'
import fulldialog from '../newComponents/fulldialog'
import addchecklist from '../newComponents/addchecklist'
import eWizard from '../newComponents/eWizard'
import Rx from '../../../node_modules/rxjs/Rx'
const data = require('../../helpers/data')

let testCase = db.ref('test')
export default {
    name: 'app',
    data() {
        return {
            value: '',
            dialogm1: '',
            color: '',
            dialog: false,
            clipped: true,
            drawer: true,
            fixed: false,
            testD: {
                name: ''
            },
            items: [
                { icon: 'fingerprint', title: 'eWizard', href: "#/success/ewizard" },
                { icon: 'whatshot', title: 'Cobalt', href: "#/success/cobalt" },
                { icon: 'hot_tub', title: 'Test Case', href: '#/success/eWizardTestCase' },
                { icon: 'bubble_chart', title: 'in progress' },
                { icon: 'bubble_chart', title: 'in progress' }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Cobalt & eWizard QA project',
        }
    },
    firebase: {
        test: testCase
    },
    methods: {
        kpi: (item) => {
            let myArray = [];
            console.log(9999999999999999, Object.keys(item.title));
            Rx.Observable.from(Object.keys(item.title)).subscribe((Mitem) =>{ 
                myArray.push(item.title[Mitem].proccent_pass)
            })
            Rx.Observable.from(myArray)
            .reduce((a,b) =>  a+b)
            .subscribe((item) => console.log(98756, this.value=item))
            console.log(555555555555555555, this.value);
            //   Rx.Observable.from(data.getData('array keys of '+ item.name))
            // Rx.Observable.from(data.getData('all_case'))
            //     // .subscribe((item) => Rx.Observable.from(Object.keys(item.title))
            //         // .subscribe((item) => console.log(6666666666666666, item)))
            //         .subscribe((item) => myArray.push(item))
            //         console.log(77777777777, myArray);
        }
    }
}