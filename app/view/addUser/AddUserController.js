/**
 * This class is the controller for the add user view for the application.
 * SubmitUser will add a new user to the store.
 */
Ext.define('SampleExtJS.view.addUser.AddUserController', {
    extend: 'Ext.app.ViewController',
    

    alias: 'controller.addUser',

    requires: [
        'SampleExtJS.view.main.List'
    ],

    SubmitUser: function() {
        Name = this.lookupReference('name').getValue();
        Email = this.lookupReference('email').getValue();
        Phone = this.lookupReference('phone').getValue();
        this.getView().destroy();
        store = Ext.getStore('Users')
        index = store.getCount()+1;
        data = {
            name: Name,
            email: Email,
            phone: Phone
        }
        store.insert(index,data);
        store.loadRecords(store.getRange());
    }
});
