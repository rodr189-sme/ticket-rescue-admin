$("#missionType").change(function () {
    var missionType = this.value;
    if(missionType == 1) {
    	$("#viewSection").hide();
    	$("#subscriptionSection").hide();
    	$("#followSection").hide();
    	$("#streamSection").hide();
    	$("#questionSection").show();
    }
    else if (missionType == 2) {
    	$("#questionSection").hide();
    	$("#subscriptionSection").hide();
    	$("#followSection").hide();
    	$("#streamSection").hide();
    	$("#viewSection").show();
    }
    else if (missionType == 3) {
    	$("#questionSection").hide();
    	$("#viewSection").hide();
    	$("#followSection").hide();
    	$("#streamSection").hide();
    	$("#subscriptionSection").show();
    }
    else if (missionType == 4) {
    	$("#questionSection").hide();
    	$("#viewSection").hide();
    	$("#subscriptionSection").hide();
    	$("#streamSection").hide();	
    	$("#followSection").show();
    }
    else if (missionType == 5) {
    	$("#questionSection").hide();
    	$("#viewSection").hide();
    	$("#subscriptionSection").hide();
    	$("#followSection").hide();	  	
    	$("#streamSection").show();
    }
});
