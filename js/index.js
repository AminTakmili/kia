﻿
function onLoad()
 {
    document.addEventListener("deviceready", onDeviceReady, true);
   
 }
function onDeviceReady(){
	
	document.addEventListener("backbutton",amintest, false);
	 getDeviceProperty();
	
}
function getDeviceProperty()
{
    var deviceOS  = device.platform;  //fetch the device operating system
    var deviceOSVersion = device.version;  //fetch the device OS version
    var  version = deviceOSVersion.split('.');
   
    /* if(deviceOS == 'Android' && version[0]=='4' && version[1]=='4') 
      {return 1 ;}
      else
      {return 0 ;} 
	*/
}
 function exitFromApp()
 {
	 navigator.app.exitApp(); 
 }
function amintest(){
	if (flag == 1) {
		 navigator.app.exitApp(); 
	}else if(flag== 2){
		 window.location="blog.html";
	}else{
		 window.location="index.html";
	}
	return false;
}

