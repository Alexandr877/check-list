import firebase from '../../../node_modules/firebase'
import config from '../../helpers/firebaseConfig'
import fulldialog from '../newComponents/fulldialog'
import addchecklist from '../newComponents/addchecklist'
import infoewizard from '../newComponents/infoewizard'
import Rx from '../../../node_modules/rxjs/Rx'
let app = firebase.database()
let testCase = app.ref('test')
const data = require('../../helpers/data')

export default {
    data() {
        return {
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
    methods: {
        resetData: function() {
            let itemArray = []
            let cleanUserData = {
                status: "",
                progrescolor: "#80CBC4",
                user:""
            }
            console.log(data.getData('all_case')[0]);
            Rx.Observable.from(data.getData('all_case'))
            // .toArray((array) => itemArray.push(array))
            .subscribe((step) => {
                // data.setData('arrayStep', step)
                // console.log(1234, data.getData('arrayStep'));
                testCase.child(step['.key']).update(cleanUserData)
            })
        },
        checkMe: function () {
            
        },
        setUser: function (item, test){
            data.setData('all_case', test)
            console.log(1234567890, item);
            let user = firebase.auth().currentUser;
            console.log(user.displayName);
            let myuser = this.user;
            let myDataObj = {
                status: "in_progress",
                progrescolor: "#80CBC4",
                user:"in progress by " + user.displayName
            }
            return testCase.child(item['.key']).update(myDataObj)

        },
        changeColorPass: function (item, i) {
            console.log(data.getData('all_case'));
            let note = this.note;
            let myObj = { color: '#a5d6a7' }
            return testCase.child(item['.key']).child('title').child(i).update(myObj)
        },
        changeColorResset: function (item, i) {
            let note = this.note;
            let myObj = { color: '' }
            return testCase.child(item['.key']).child('title').child(i).update(myObj)
        },
        changeColorFalse: function (item, i) {
            let note = this.note;
            let myObj = { color: '#ff5252' }
            return testCase.child(item['.key']).child('title').child(i).update(myObj)
        },
        removeItem: function (item, i) {
            console.log(item['.key'], i);
            console.log(testCase.child(item['.key']).child('title').child(i));
            testCase.child(item['.key']).child('title').child(i).remove()
        }
    },
    components: { fulldialog, addchecklist, infoewizard }
}