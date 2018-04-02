/**
 * This is the login view that loads initially on application load
 */
Ext.define('SampleExtJS.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'SampleExtJS.view.login.LoginController',
        'Ext.form.Panel'
    ],
    controller: 'login',
    title: 'Login',
    bodyPadding: 20,
    floating: true,
    closable: true,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            reference: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            reference: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],
        buttons: [
        {
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onClick'
            }
        }]
    }
});
