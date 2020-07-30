
var utils = (function() { 

    function prettyPrint(obj) { 
        return JSON.stringify(obj, null, 2);
    }

    function parseEventName(e) { 
        return e.type + ":" + e.namespace;
    }

    function prepContainerForCode(elementName) { 
        var wrapper = $("#" + elementName);
        wrapper.append($("<pre>"));
        wrapper.find("pre").append($("<code>"));
        return wrapper;
    }

    function findAndPrepTargetElement(elementName) { 
        var wrapper = $("#" + elementName);
        if(wrapper.find("pre").length === 0) { 
            prepContainerForCode(elementName);
        }
        return wrapper.find("code");
    }

    function logEvent(container) { 
        var target = findAndPrepTargetElement(container);
        return function(e) { 
            target.append(parseEventName(e) + "\n");
        }
    }

    function logObjectChangeEvent(container) { 
        var target = findAndPrepTargetElement(container);
        return function(e, obj) { 
            target.html(prettyPrint(obj));
        }
    }

    function prettyPrintSource(obj, container) { 
        var target = findAndPrepTargetElement(container);
        target.html(prettyPrint(obj));
    }

    var simpleObject = { 
        firstName: "John",
        lastName: "Smith"
    };

    var testObject = { 
    "app_config" : {
		"vs" : {
			"liveStreamProducerUrlPrefix" : "rtmp://${endpoints.ms.local}:1935",
			"liveStreamConsumerUrlPrefix" : "http://${endpoints.ms.host}:8080",
			"streamingApplication" : "hls",
			"far_left_camera" : {
			"serial_number" : 0,
			"location" : "farLeft",
			"streamingChannel" : "${app_config.vs.streamingApplication}/${cart_id}-${app_config.vs.far_left_camera.location}",
			"liveStreamProducerUrl" : "${app_config.vs.liveStreamProducerUrlPrefix}/${app_config.vs.far_left_camera.streamingChannel}",
			"liveStreamConsumerUrl" : "${app_config.vs.liveStreamConsumerUrlPrefix}/${app_config.vs.far_left_camera.streamingChannel}.m3u8",
			"enableGesture" : false,
			"streamCamera" : false,
			"storeData" : false,
			"storeRGBData" : false,
			"storeDepthData" : false,
			"rimPoints" : {
					"x1" : 10,
					"y1" : 10,
					"x2" : 10,
					"y2" : 10,
					"x3" : 10,
					"y3" : 10,
					"x4" : 10,
					"y4" : 10
					}
				}
			}
		}
    };

    return { 
        logEvent: logEvent,
        logObjectChangeEvent: logObjectChangeEvent,
        prettyPrint: prettyPrint,
        testObject: testObject,
        simpleObject: simpleObject,
        prettyPrintSource: prettyPrintSource
    };

}());
