import firebase from '../../../node_modules/firebase'

let db = firebase.database()
let testCase = db.ref('testCase')

export default {
  props: ['list'],
  data() {
    return {
      dialog: false,
      note: '',
      description: '',
      precondition: '',
      expected_result:'',
      steps: '',
      status: '',
      comment: ''
    }
  },
  firebase: {
    test: testCase
  },
  methods: {
    addCase: function () {
      testCase.push(this.testD)
      this.testD.name = ''
      this.testD.check1 = false
      this.testD.title1 = ''
    },
    Update: function (item) {
      String.prototype.hashCode = function () {
        if (Array.prototype.reduce) {
          return this.split("").reduce(function (a, b) {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a
          }, 0);
        }
        var hash = 0;
        if (this.length === 0) return hash;
        for (var i = 0; i < this.length; i++) {
          var character = this.charCodeAt(i);
          hash = ((hash << 5) - hash) + character;
          hash = hash & hash;
        }
        return hash;
      }
      let newKey;
      function rand() {
        var Randomtext;
        Randomtext = Math.random().toString(36).substring(2);
        return Randomtext
      };
      if (this.note !== '') {
        newKey = "title" + new String(rand()).hashCode()
        let myObj = {};
        let description = this.description;
        let note = this.note;
        let precondition = this.precondition;
        let steps = this.steps;
        let status = this.status;
        let comment= this.comment;
        myObj[newKey] = { 
          name: note,
          over: precondition,
          info: description,
          step: steps,
          status: status,
          comment: comment
         }
        testCase.child(item['.key']).child('title').update(myObj)
        this.description = ''
        this.precondition = ''
        this.steps = ''
        this.status = ''
        this.comment = ''
        return this.note = ''
      }
      else {
        alert('WTF!!!!!!')
      }
    },
    removeItem: function (item) {
      testCase.child(item['.key']).remove()
    }
  },
  components: { "vue-html-editor": require("../../../node_modules/vue-html-editor") }
}