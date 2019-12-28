const minEmailLength = 5;
const minPasswordlLength = 5;
let password = '';
let changePass = false;
let oldPassword = '';
let newPassword = '';
let usersPasswords = {
    'user': 'UserPass',
    'admin': 'AdminPass'
}
let repeatNewPass = '';
let email = prompt('Please, enter Your e-mail', 'user_name@gmail.com');
if ( email === '' || email === null ) {
    alert('Canceled');
} else {
    if ( email.length <= minEmailLength ) {
        alert("I don't know any emails having name length less than 5 symbols");
    } else {
        switch (email) {
            case 'user@gmail.com':
                password = prompt('Please, enter Your password', '');
                if ( password === '' || password === null ) {
                    alert('Canceled');
                } else {
                    if ( password !== usersPasswords['user'] ) {
                        alert('Wrong password');
                    } else {
                        changePass = confirm('Do you want to change your password?');
                        if ( !changePass ) {
                            alert('You have failed the change.');
                        } else {
                            oldPassword = prompt('Please, enter Your OLD password', '');
                            if ( oldPassword === '' || oldPassword === null ) {
                                alert('Canceled');
                            } else {
                                if ( oldPassword !== usersPasswords['user'] ) {
                                    alert('Wrong password');
                                } else {
                                    newPassword = prompt('Please, enter Your NEW password', '');
                                    if ( newPassword === '' || newPassword === null ) {
                                        alert('Canceled');
                                    } else {
                                        if ( newPassword.length <= minPasswordlLength ) {
                                            alert('It’s too short password. Sorry.');
                                        } else {
                                            repeatNewPass = prompt('Please, enter Your NEW password again', '');
                                            if ( repeatNewPass !== newPassword ) {
                                                alert('You wrote the wrong password.');
                                            } else {
                                                alert('You have successfully changed your password.');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 'admin@gmail.com':
                password = prompt('Please, enter Your password', '');
                if ( password === '' || password === null ) {
                    alert('Canceled');
                } else {
                    if ( password !== usersPasswords['admin'] ) {
                        alert('Wrong password');
                    } else {
                        changePass = confirm('Do you want to change your password?');
                        if ( !changePass ) {
                            alert('You have failed the change.');
                        } else {
                            oldPassword = prompt('Please, enter Your OLD password', '');
                            if ( oldPassword === '' || oldPassword === null ) {
                                alert('Canceled');
                            } else {
                                if ( oldPassword !== usersPasswords['admin'] ) {
                                    alert('Wrong password');
                                } else {
                                    newPassword = prompt('Please, enter Your NEW password', '');
                                    if ( newPassword === '' || newPassword === null ) {
                                        alert('Canceled');
                                    } else {
                                        if ( newPassword.length <= minPasswordlLength ) {
                                            alert('It’s too short password. Sorry.');
                                        } else {
                                            repeatNewPass = prompt('Please, enter Your NEW password again', '');
                                            if ( repeatNewPass !== newPassword ) {
                                                alert('You wrote the wrong password.');
                                            } else {
                                                alert('You have successfully changed your password.');
                                            } 
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;    
            default: 
                alert('I don’t know you');
        }
    }
}