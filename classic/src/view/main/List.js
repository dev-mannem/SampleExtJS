/**
 * This is the view for list of users table that is displayed on user login.
 * Tis uses the actual Users store an renders into the table
 */
Ext.define('SampleExtJS.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'SampleExtJS.store.Users'
    ],
    plugins: [{
        ptype: 'gridfilters'
      }],

    title: 'Users',

    store: {
        type: 'users'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', filter: {type: 'string', dataIndex: 'name'} },
        { text: 'Email', dataIndex: 'email', flex: 1, filter: {type: 'string', dataIndex: 'name'} },
        { text: 'Phone', dataIndex: 'phone', flex: 1, filter: {type: 'string', dataIndex: 'name'} }
    ]
});
