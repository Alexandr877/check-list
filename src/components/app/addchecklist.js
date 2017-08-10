import firebase from '../../../node_modules/firebase'
import Rx from '../../../node_modules/rxjs/Rx'
const data = require('../../helpers/data')
let db = firebase.database()
let testCase = db.ref('test')
export default {
    data() {
        return {
            testD: {
                name: ''
            },
            dialog: false
        }
    },
    firebase: {
        test: testCase
    },
    methods: {
        addCase: function () {
            if (this.testD.name !== '') {
                testCase.push(this.testD)
                return this.testD.name = ''
            }
            alert('WTF!!!!')
        }
    }
}