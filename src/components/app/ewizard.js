import firebase from '../../../node_modules/firebase'
import config from '../../helpers/firebaseConfig'
import fulldialog from '../newComponents/fulldialog'
import addchecklist from '../newComponents/addchecklist'
import infoewizard from '../newComponents/infoewizard'
import infostep from '../newComponents/infostep'
import editEwizard from '../newComponents/editEwizard'
import Rx from '../../../node_modules/rxjs/Rx'
let app = firebase.database()
let testCase = app.ref('test')
const data = require('../../helpers/data')

export default {
    data() {
        return {
            value: 0,
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
            console.log(testCase);
            let itemArray = []
            let cleanUserData = {
                status: "",
                progrescolor: "#80CBC4",
                user:""
            }
            console.log(data.getData('all_case'));
            Rx.Observable.from(data.getData('all_case'))
            // .toArray((array) => itemArray.push(array))
            .subscribe((step) => {
                // data.setData('arrayStep', step)
                // console.log(1234, data.getData('all_case'));
                testCase.child(step['.key']).update(cleanUserData)
            })
        },
        kpi: (item) => {
            let myArray = [];
            console.log(9999999999999999, Object.keys(item.title));
            Rx.Observable.from(Object.keys(item.title)).subscribe((Mitem) =>{ 
                myArray.push(item.title[Mitem].proccent_pass)
            })
            Rx.Observable.from(myArray)
            .reduce((a,b) =>  a+b)
            .subscribe((item) => console.log(98756, this.value=item))
            console.log(555555555555555555, this.value)
        },
        checkMe: function () {
            
        },
        setUser: function (item, test){
            data.setData('array keys of '+ item.name, Object.keys(item.title))
            data.setData('all_case', test)
            console.log(222222222222222222, test);
            console.log(1234567890, item.title);
            console.log(1234567890, Object.keys(item.title));
            let user = firebase.auth().currentUser;
            console.log(user.displayName);
            console.log(1111111111111111, data.getData('array keys of '+ item.name).length);
            console.log(2222222222222222, 100 / data.getData('array keys of '+ item.name).length);
            data.setData('proccent of '+ item.name, 100 / data.getData('array keys of '+ item.name).length)
            let myuser = this.user;
            let myDataObj = {
                status: "in_progress",
                progrescolor: "#80CBC4",
                user:"in progress by " + user.displayName
            }
            return testCase.child(item['.key']).update(myDataObj)

        },
        changeColorPass: function (item, i) {
            console.log(data.getData('proccent of '+ item.name));
            console.log(data.getData('all_case'));
            let note = this.note;
            let myArray =[];
            let myObj = { color: '#a5d6a7', proccent_failed: 0, proccent_pass: data.getData('proccent of '+ item.name)}
            console.log(myObj);
            return testCase.child(item['.key']).child('title').child(i).update(myObj)
        },
        changeColorResset: function (item, i) {
            let note = this.note;
            let myObj = { color: '', proccent_pass: 0, proccent_failed: 0 }
            return testCase.child(item['.key']).child('title').child(i).update(myObj)
        },
        changeColorFalse: function (item, i) {
            let note = this.note;
            let myObj = { color: '#ff5252',  proccent_pass: 0, proccent_failed: data.getData('proccent of '+ item.name)}
            return testCase.child(item['.key']).child('title').child(i).update(myObj)
        },
        removeItem: function (item, i) {
            console.log(item['.key'], i);
            console.log(testCase.child(item['.key']).child('title').child(i));
            testCase.child(item['.key']).child('title').child(i).remove()
        }
    },
    components: { fulldialog, addchecklist, infoewizard, infostep, editEwizard }
}