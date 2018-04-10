		    function drawharta(){
            var mapProp = {
                        center: new google.maps.LatLng(44.4432214, 26.1585078),
                        zoom: 12,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    };
                    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		}