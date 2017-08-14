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
    }
}