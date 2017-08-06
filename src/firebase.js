import Firebase from 'firebase'
import config from './helpers/firebaseConfig'

const firebaseApp = Firebase.initializeApp(config);

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
const db = firebaseApp.database();
export default db;