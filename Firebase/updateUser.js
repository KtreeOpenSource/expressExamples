const Auth = require('./config');

exports.updateUser = async (uid) => {
    try {
        const updatedUser = await Auth.updateUser(uid, {
            displayName: 'Updated Name',
            email: 'updatedemail@example.com',
            phoneNumber: '+1234567890',
            // Other user properties to update...
        });
        console.log('Successfully updated user:', updatedUser.uid);
    } catch (error) {
        console.error('Error updating user:', error);
    }

}