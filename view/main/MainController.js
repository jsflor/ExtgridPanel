/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
const navigate = function(panel, direction){
    var layout = panel.getLayout();
    layout[direction]();
    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
    Ext.getCmp('move-next').setDisabled(!layout.getNext());
}

Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control: {
        '#btnEdit': {
            click: 'Update'
        },
        '#Submit': {
            click: 'SubmitForm'
        },
        '#Reset': {
            click: 'ResetForm'
        },
        '#prev': {
            click: 'navigate'
        },
        '#next': {
            click: 'navigate'
        },
        '#btnAdd': {
            click: 'Create'
        }
    },

    navigate: function(btn) {
        switch(btn.itemId){
            case 'prev':
                return navigate(btn.up("panel"), "prev");
            case 'next':
                return navigate(btn.up("panel"), "next");
        }
    },

    Create: function(){
        navigate(this.getView().down('#CardPanel'), "next");
    },

    Update: function(){
        this.getView().query('#myForm')[0].getForm().loadRecord(this.getView().down('mainGrid').getSelection()[0]);
        navigate(this.getView().down('#CardPanel'), "next");
    },

    SubmitForm: function(){
        var selection = this.getView().down('mainGrid').getSelection()[0];
        var fieldValues = this.getView().query('#myForm')[0].getForm().getFieldValues();
        var store = this.getView().query('mainGrid')[0].getStore()
        if(selection !== undefined){
            this.getView().query('mainGrid')[0].getStore().findRecord('name', selection.data.name).set('name', fieldValues.name);
            this.getView().query('mainGrid')[0].getStore().findRecord('phone', selection.data.phone).set('phone', fieldValues.phone);
            this.getView().query('mainGrid')[0].getStore().findRecord('email', selection.data.email).set('email', fieldValues.email);
            this.getView().query('mainGrid')[0].getStore().findRecord('website', selection.data.website).set('website', fieldValues.website);
        } else {
           store.add(fieldValues);
        }
        this.getView().query('#myForm')[0].getForm().reset();
        navigate(this.getView().down('#CardPanel'), "prev");
    },

    ResetForm: function(){
        this.getView().query('#myForm')[0].getForm().reset();
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
