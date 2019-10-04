Ext.define('app.view.form.FormPanel', {
    extend: 'Ext.panel.Panel',
    title: 'myForm',
    alias: 'widget.myPanel',
    requires: 'app.view.form.Form',
    height: 500,
    width: 500,
    buttons: [
        { xtype: 'button', text: 'Aceptar', itemId: 'Submit' },
        { xtype: 'button', text: 'Reiniciar', itemId: 'Reset' }
    ],
    items: [
        {
            xtype: 'panel',
            layout: 'hbox',
            bodyPadding: 15,
            items: [
            {
                html: '<span></span>',
                flex: .50
            },
            {
                xtype: 'myForm',
                flex: 1
            }
            ]
        }
    ]
});