/**
 * This class is add user view.
 * This displays add user form on load
 */
Ext.define('SampleExtJS.view.addUser.AddUser', {
    extend: 'Ext.window.Window',
    xtype: 'add-user',

    requires: [
        'SampleExtJS.view.addUser.AddUserController',
        'Ext.form.Panel'
    ],
    controller: 'addUser',
    title: 'Add User',
    bodyPadding: 20,
    floating: true,
    centered: true,
    modal: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            reference: 'name',
            fieldLabel: 'Name',
            allowBlank: false
        }, {
            xtype: 'textfield',
            reference: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            reference: 'phone',
            fieldLabel: 'Phone',
            allowBlank: false
        }],
        buttons: [{
            text: 'Reset',
            listeners: {
                click: 'onClick'
            }
        },
        {
            text: 'Submit',
            formBind: true,
            listeners: {
                click: 'SubmitUser'
            }
        }]
    }
});