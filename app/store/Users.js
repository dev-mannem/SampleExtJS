/**
 * This is the user store from which data is being rendered into the views.
 */
Ext.define('SampleExtJS.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',

    model: 'SampleExtJS.model.Users',

    data: { items: [
        { name: 'Augie', email: "augie.beal@gmail.com", phone: "830-329-7656" },
        { name: 'Sunny',     email: "Sunny.norman@outlook.com", phone: "534-763-9843" },
        { name: 'Danny',   email: "danny.ramer@yahoo.com", phone: "816-716-6634" },
        { name: 'glen',     email: "glen.glen@hotmail.com",  phone: "428-612-5842" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
