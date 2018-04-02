/**
 * This class is the controller for the main view for the application. 
 * This handles add, delete users and update grid functionalities
 */
Ext.define('SampleExtJS.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'SampleExtJS.view.addUser.AddUser'
    ],

    alias: 'controller.main',

    addUser: function() {
        Ext.create('SampleExtJS.view.addUser.AddUser').show();
    },

    updateGrid: function() {
        grid = this.lookupReference('userlist');
        grid.getStore().loadRecords(store.getRange());
    },

    deleteUser: function() {
        grid = this.lookupReference('userlist');
        store = Ext.getStore('Users')
        store.remove(grid.getSelectionModel().getSelection()[0]);
        grid.getStore().loadRecords(store.getRange());
        
    }
});
