/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SampleExtJS.Application',

    name: 'SampleExtJS',

    requires: [
        // This will automatically load all classes in the SampleExtJS namespace
        // so that application classes do not need to require each other.
        'SampleExtJS.*'
    ],
    stores: ['Users'],

    // The name of the initial view to create.
    mainView: 'SampleExtJS.view.main.Main'
});
