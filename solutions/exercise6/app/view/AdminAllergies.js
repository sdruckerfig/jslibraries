/*
 * File: app/view/AdminAllergies.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.AdminAllergies', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminallergies',

    requires: [
        'MyApp.view.AdminAllergiesViewModel',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.form.field.Text',
        'Ext.view.Table',
        'Ext.grid.plugin.RowEditing'
    ],

    viewModel: {
        type: 'adminallergies'
    },
    autoShow: true,
    height: 250,
    width: 400,
    layout: 'fit',

    bind: {
        title: 'Edit {selectedRecord.text}'
    },
    items: [
        {
            xtype: 'gridpanel',
            header: false,
            bind: {
                selection: '{selectedRecord}',
                store: '{Allergies}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'text',
                    text: 'Label',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting'
                }
            ]
        }
    ]

});