document.getElementById("editor").addEventListener("keyup", function() {
    var code = document.getElementById("editor").value;
    document.getElementById("result").contentWindow.document.open();
    document.getElementById("result").contentWindow.document.write(code);
    document.getElementById("result").contentWindow.document.close();
});