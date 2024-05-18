document.getElementById("editor").addEventListener("keyup", function() {
    var code = document.getElementById("editor").value;

    document.getElementById("result").innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${code}
    </body>
    </html>`
  });