/**
 * This view is an example list of people.
 */
Ext.define('app.view.grid.MainGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainGrid',

    requires: [
        'app.store.Employees'
    ],

    title: 'Employees Main Grid',

    store: {
        type: 'employees'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'website', dataIndex: 'website', flex: 1}
    ],

    buttons: [
        { xtype: 'button', text: 'Create', itemId: 'btnAdd' },
        { xtype: 'button', text: 'Update', itemId: 'btnEdit' }
    ]
});
