Ext.define('app.view.form.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myForm',
    itemId: 'myForm',
    height: 500,
    width: 500,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Nombre',
            name: 'name',
            maxLength: 30,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            maxLength: 30,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone',
            name: 'phone',
            maxLength: 30,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Website',
            name: 'website',
            maxLength: 30,
            allowBlank: false
        }
    ]
});