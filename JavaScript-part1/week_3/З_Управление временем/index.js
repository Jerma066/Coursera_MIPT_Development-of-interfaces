/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var currentDate = new Date(date);

    var newObj = {
        value: date,
        dateValue: currentDate,

        updateStrDateValue: function(date) {
            var YYYY = this.dateValue.getFullYear();

            var MM = this.dateValue.getMonth() + 1;
            if(MM < 10)
                MM = "0" + MM;

            var DD = this.dateValue.getDate();
            if(DD < 10)
                DD = "0" + DD;

            var HH = this.dateValue.getHours();
            if(HH < 10)
                HH = "0" + HH;

            var SS = this.dateValue.getMinutes();
            if(SS < 10)
                SS = "0" + SS;

            this.value = YYYY + "-" + MM + "-" + DD + " " + HH + ":" + SS;
        },

        add: function (amount, mode) {
            if (amount < 0)
                throw new TypeError("Неверное значение в аргументе amount: " + amount);

            switch (mode) {
                case "years":
                    this.dateValue.setFullYear(this.dateValue.getFullYear() + amount);
                    break;
                case "months":
                    this.dateValue.setMonth(this.dateValue.getMonth() + amount);
                    break;
                case "days":
                    this.dateValue.setDate(this.dateValue.getDate() + amount);
                    break;
                case "hours":
                    this.dateValue.setHours(this.dateValue.getHours() + amount);
                    break;
                case "minutes":
                    this.dateValue.setMinutes(this.dateValue.getMinutes() + amount);
                    break;
                default:
                    throw new TypeError('Неверное значение в аргументе mode: ' + mode);
                    break;
            }

            this.updateStrDateValue();
            return this;
        },

        subtract: function (amount, mode) {
            if (amount < 0)
                throw new TypeError("Неверное значение в аргументе amount: " + amount);

            switch (mode) {
                case "years":
                    this.dateValue.setFullYear(this.dateValue.getFullYear() - amount);
                    break;
                case "months":
                    this.dateValue.setMonth(this.dateValue.getMonth() - amount);
                    break;
                case "days":
                    this.dateValue.setDate(this.dateValue.getDate() - amount);
                    break;
                case "hours":
                    this.dateValue.setHours(this.dateValue.getHours() - amount);
                    break;
                case "minutes":
                    this.dateValue.setMinutes(this.dateValue.getMinutes() - amount);
                    break;
                default:
                    throw new TypeError('Неверное значение в аргументе mode: ' + mode);
                    break;
            }

            this.updateStrDateValue();
            return this;
        }
    }

    return newObj;
};
