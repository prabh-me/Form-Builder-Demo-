var geo = Ext.create('Ext.util.Geolocation', {
 autoUpdate: false,
 listeners: {
  locationupdate: function(geo) {
     var currentLat = geo.getLatitude();
     var currentLng =  geo.getLongitude();
     var altitude = geo.getAltitude();
     var speed = geo.getSpeed();
     var heading= geo.getHeading();
  },
  locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
     if(bTimeout)
       Ext.Msg.alert('Timeout occurred',"Could not get current position");
     else 
       alert('Error occurred.');
     }
  }
 }
});
geo.updateLocation();