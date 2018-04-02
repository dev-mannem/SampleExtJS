/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define('SampleExtJS.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    bodyPadding: 10,

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.form.Panel',

        'SampleExtJS.view.main.MainController',
        'SampleExtJS.view.main.MainModel',
        'SampleExtJS.view.main.List',
        'SampleExtJS.view.login.Login',
        'SampleExtJS.store.Users',
        'SampleExtJS.view.addUser.AddUser'
        
    ],

    controller: 'main',
    viewModel: 'main',
    store: 'users',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        id: 'homeTab',
        iconCls: 'fa-home',
        hidden: false,
        items: [{
            xtype: 'login'
        }]
    }, {
        title: 'Users',
        id: 'usersTab',
        iconCls: 'fa-user',
        hidden: true,
        items: [
            {
                xtype: 'mainlist',
                reference: 'userlist'
            },
            {
                bodyPadding: 'top: 20px;'
            },
            {
                buttons: [
                    
                    {
                        text: 'Add User',
                        listeners: {
                            click: 'addUser'
                        }
                    },
                    {
                        text: 'Delete User',
                        listeners: {
                            click: 'deleteUser'
                        }
                    },
                    {
                        text: 'Update User Table',
                        listeners: {
                            click: 'updateGrid'
                        }
                    }
                ],
                bodyPadding: 'padding-top: 30px; left:unset;'
        }],

    }]
});
