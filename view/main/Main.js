/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
// var navigate = function(panel, direction){
//     // This routine could contain business logic required to manage the navigation steps.
//     // It would call setActiveItem as needed, manage navigation button state, handle any
//     // branching logic that might be required, handle alternate actions like cancellation
//     // or finalization, etc.  A complete wizard implementation could get pretty
//     // sophisticated depending on the complexity required, and should probably be
//     // done as a subclass of CardLayout in a real-world implementation.
//     var layout = panel.getLayout();
//     layout[direction]();
//     Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
//     Ext.getCmp('move-next').setDisabled(!layout.getNext());
// };

Ext.define('app.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.grid.MainGrid',
        'app.view.form.FormPanel'
    ],

    controller: 'main',
    viewModel: 'main',

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
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [
            {
                xtype: 'panel',
                itemId: 'CardPanel',
                title: 'Example Wizard',
                width: '100%',
                height: 500,
                layout: 'card',
                bodyStyle: 'padding:15px',
                defaults: {
                    // applied to each contained panel
                    border: false
                },
                // just an example of one possible navigation scheme, using buttons
                bbar: [
                    {
                        id: 'move-prev',
                        text: 'Back',
                        itemId: 'prev',
                        disabled: true
                    },
                    '->', 
                    {
                        id: 'move-next',
                        text: 'Next',
                        itemId: 'next',
                    }
                ],
                items: [{
                    xtype: 'mainGrid'
                },{
                    xtype: 'myPanel'
                }]
            }
        ]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
