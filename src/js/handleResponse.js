function handleResponse(data) {
    document.getElementById("data-container").innerHTML += "<br>-----------------<br>";
    document.getElementById("data-container").innerHTML += JSON.stringify(data);
    document.getElementById("textbox").innerText = new Date();
}