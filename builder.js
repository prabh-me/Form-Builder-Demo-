

Ext.define('demo.view.Main', {
    extend: 'Ext.Container', 
    xtype: 'carddemo',
    scrollable:true,

    requires: [
        'Ext.TitleBar',
        'Ext.Img'
    ],
	config: {

        defaults: {
            margin: 10
        },
        layout: {
            type: 'card'

        },
        items: [{
		
			
            xtype: 'segmentedbutton',

            docked: 'top',
            items: [{
                text: 'Build Form',
                pressed: true
            }, {
                text: 'Upload form'
            }, {
                text: 'Search'
            }],
            listeners: {
                toggle: function (segmentedbutton, button, isPressed, eOpts) {
                    if (isPressed) {
                        var container = segmentedbutton.getParent();
                        var selectedComponent = container.getComponent(button.getText());
                        container.setActiveItem(selectedComponent);
                    }
                }
            }
        }, {
            xtype: 'component',
            itemId: 'Build Form',
            contentel: "psp",
            style: 'background-color: #FFFDFD'
        }, {
            xtype: 'component',
            itemId: 'Upload form',
            html: 'The users would be able to upload a pre-existing form.',
            style: 'background-color: #FFFDFD'
        }, {
            xtype: 'component',
            itemId: 'Search',
            html: '<input type="text" name="q" size="19" maxlength="120" style="font-size:11pt;height:27px" placeholder="Search existing forms">&nbsp; <button type="button">Search</button>&nbsp;<button type="button">Search via location</button>',
            style: 'background-color: #FFFDFD'
        }]
    }
});

