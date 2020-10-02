/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet)
{
    var answer = [];
    var currentIndex = 0;

    while(tweet.indexOf('#', currentIndex) != -1){
        var firstInd = tweet.indexOf('#', currentIndex);
        var secondInd = tweet.indexOf(' ', firstInd);
        if(secondInd === -1)
            secondInd = tweet.length;
        currentIndex = secondInd;
        answer.push(tweet.slice(firstInd+1, secondInd));
    }

    return answer;
}