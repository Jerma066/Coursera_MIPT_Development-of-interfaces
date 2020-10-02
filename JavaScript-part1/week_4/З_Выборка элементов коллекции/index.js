/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function parseItems(itemsArray){
    var result = [];
    for(var i = 0; i < itemsArray.length; i++){
        var element = {}
        for(var key in itemsArray[i]) {
            element[key] = itemsArray[i][key];
        }
        result.push(element);
    }
    return result;
}

function filterItems(elements, arr) {
    var result = [];
    var property = arr[1][0];
    var correctValues = arr[1][1];

    for (var j = 0; j < elements.length; j++){
        if(elements[j][property] !== undefined) {
            for (var k = 0; k < correctValues.length; ++k) {
                if (elements[j][property] === correctValues[k]) {
                    result.push(elements[j]);
                }
            }
        }
    }

    return result;
}

function selectItems(elements, arr) {
    var fields = arr[1];
    for(var j = 0; j < elements.length; j++) {
        var keys = Object.keys(elements[j]);
        for(var t = 0; t < keys.length; t++) {
            var key = keys[t];
            var value = elements[j][key];
            var flag = true;
            for (var k = 0; k < fields.length; k++) {
                if (elements[j][fields[k]] !== undefined) {
                    if (key !== fields[k]) {
                        flag = false;
                    }
                    else {
                        flag = true;
                        break;
                    }
                }
            }
            if (flag === false) {
                delete elements[j][key];
            }
        }
    }

    return elements;
}

function query(collection) {
    var args = [].slice.call(arguments);
    var items = parseItems(args[0]);

    for(var i = 1; i < args.length; i++) {
        var argi = args[i].slice();
        if(argi[0] === "filterIn") {
            items = filterItems(items, argi);
        }
    }

    for(var i = 1; i < args.length; i++) {
        var argi = args[i].slice();
        if(argi[0] === 'select') {
            items = selectItems(items, argi);
        }
    }

    return items;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var fields = [].slice.call(arguments);
    return ['filterIn', fields];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
