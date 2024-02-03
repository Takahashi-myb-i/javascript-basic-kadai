window.onload = function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();

    console.log(today.getFullYear()+"年",(today.getMonth()+1)+"月",today.getDate()+"日");
};