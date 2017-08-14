import firebase from '../../../node_modules/firebase'
import config from '../../helpers/firebaseConfig'
import testCaseDialog from '../newComponents/testCaseDialog'
import addTestCase from '../newComponents/addTestCase'
import infoewizard from '../newComponents/infoewizard'
import Rx from '../../../node_modules/rxjs/Rx'
let app = firebase.database()
let testCase = app.ref('testCase')
const data = require('../../helpers/data')

export default {
    data() {
        return {
            pagination: {
          sortBy: 'name'
        },
        selected: [],
            headers: [
          {
            text: 'Name/Idea',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Precondition Steps', value: 'precondition' },
          { text: 'Steps', value: 'steps' },
          { text: 'Expected Result', value: 'expected_result' },
          { text: 'Status', value: 'status' },
          { text: 'Comments', value: 'comments' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            steps: 'Frozen Yogurt sdff ds dsfudsof sdhf idsuf uidsgfi ',
            precondition: 159,
            expected_result: 6.0,
            status: 24,
            comments: 4.0
          }
        ],
            dialogm1: '',
            color: '',
            user: 'in progress by',
            progrescolor: '',
            dialog: false,
            clipped: true,
            drawer: true,
            fixed: false,
            testD: {
                name: ''
            }
        }
    },
    firebase: {
        test: testCase
    },
    components: { testCaseDialog, addTestCase, infoewizard }
}