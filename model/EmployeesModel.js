Ext.define('app.model.EmployeesModel', {
    extend: 'Ext.data.Model',
    idProperty: 'user',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'website', type: 'string'}
    ],
    proxy: {
        type: 'memory'
    }
});