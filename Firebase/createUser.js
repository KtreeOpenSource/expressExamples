const Auth = require('./config');
exports.createUser = async () => {
    try {
        const user = await Auth.createUser({
            email: 'user@example.com',
            password: 'password123',
            displayName: 'John Doe',
            phoneNumber: '+1234567890',
            // Other user properties...
        });
        console.log('Successfully created user:', user.uid);
    } catch (error) {
        console.error('Error creating user:', error);
    }

}