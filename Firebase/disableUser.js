const Auth = require('./config');

exports.disableUser = async (uid) => {
    try {
        await Auth.updateUser(uid, {
            disabled: true
        });
        console.log('Successfully disabled user:', uid);
    } catch (error) {
        console.error('Error disabling user:', error);
    }

}