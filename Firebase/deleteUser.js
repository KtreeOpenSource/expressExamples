const Auth = require('./config');

exports.deleteUser = async (uid) => {
    try {
        await Auth.deleteUser(uid);
        console.log('Successfully deleted user:', uid);
    } catch (error) {
        console.error('Error deleting user:', error);
    }

}