
function write (n) {
    for(var i = 1; i<= n; i++) {
        for (var j= 1; j<=i;j++) {
            document.write("*")
        }
        document.write("<br>")
    }
}
do {
    var n = prompt("请输入一个正整数")

    if (+n > 0 && parseInt(n) == parseFloat(n)) {
        write(n)
    } else {
        alert("必须输入一个正整数，请重新输入")
    }
} while (!(+n > 0 && parseInt(n) == parseFloat(n)))



