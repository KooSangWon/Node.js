module.exports = function (wid) {
    //객체 중괄호 리턴  ,배열은 대괄호
    return {
        width: wid,
        area: function () {
            return this.width*this.width;
        },
        circum: function () {
            return 4*this.width;
        }
    };
}