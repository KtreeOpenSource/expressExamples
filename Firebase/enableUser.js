const Auth = require('./config');

exports.enableUser = async (uid) => {
    try {
        await Auth.updateUser(uid, {
            disabled: false
        });
        console.log('Successfully enabled user:', uid);
    } catch (error) {
        console.error('Error enabling user:', error);
    }

}