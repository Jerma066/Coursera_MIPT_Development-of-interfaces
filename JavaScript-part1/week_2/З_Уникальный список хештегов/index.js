/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var answer = "";
    var newArray = [];

    for(var i = 0; i < hashtags.length; i++){
        newArray.push(hashtags[i].toLowerCase());
    }

    for(var i = 0; i < newArray.length; i++){
        var ht = newArray[i];
        if(newArray.indexOf(ht) === i){
            if(answer.length != 0){
                answer += ", " + ht;
            }
            else{
                answer += ht;
            }
        }
    }

    return answer;
};
