/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	var newMinutes = minutes + interval;
	var newHours = ( hours + Math.floor( newMinutes / 60 ) ) % 24;
    newMinutes %= 60;
    
    var strMin = newMinutes.toString();
    if(strMin.length < 2){
		strMin = "0" + strMin;
	}
	
	var strHour = newHours.toString();
	if(strHour.length < 2) {
		strHour = "0" + strHour;
	}
	
	return strHour + ":" + strMin;
};
