/**
 * This class is controller for login view which handles user login
 */
Ext.define('SampleExtJS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onClick: function() {
        username = this.lookupReference('username').getValue();
        password = this.lookupReference('password').getValue();

        if(username == 'James' || username == 'Lucy'|| username == 'Ryan' ) {
            if(password == 'a123456' ){
                Ext.getCmp('usersTab').show();
            }
            else {
                window.location.reload();
            }
        }

    }
});
