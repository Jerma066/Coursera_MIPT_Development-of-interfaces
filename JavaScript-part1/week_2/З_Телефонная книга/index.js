// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

function AddContact(Name, PhoneNumbers) {
    if(Object.keys(phoneBook).indexOf(Name) === -1){
        phoneBook[Name] = PhoneNumbers;
    }
    else{
        for(var i = 0; i < PhoneNumbers.length; i++){
            phoneBook[Name].push(PhoneNumbers[i]);
        }
    }
}

function RemoveContactPhone(PhoneNumber) {
    for (var key in phoneBook) {
        var index = phoneBook[key].indexOf(PhoneNumber)
        if(index != -1){
            phoneBook[key].splice(index, 1);

            if(phoneBook[key].length === 0)
                delete phoneBook[key];

            return true;
        }
    }
    return false;
}

function ShowPhoneBook() {
    var keys = Object.keys(phoneBook);
    keys.sort();
    var answer = []
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var answerItem = key + ": " + phoneBook[key].join(', ');
        answer.push(answerItem);
    }
    return answer;
}

module.exports = function (command) {
    var words = command.split(' ');

    switch(words[0]){
        case "ADD":
            AddContact(words[1], words[2].split(','));
            break;

        case "REMOVE_PHONE":
            return RemoveContactPhone(words[1]);
            break;

        case "SHOW":
            return ShowPhoneBook();
            break;
    }
};
