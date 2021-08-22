function ajax(src, callback) {
    // your code here
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
    var xhr = new XMLHttpRequest()  
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
              console.log('hello')
              callback(this)
            } 
      }
      xhr.open('GET', src , true)
      xhr.send()
}


function render(data) {
    // your code here.
    
    // document.getElementById("root").innerHTML = xhr.responseText

    let newDiv = document.createElement("div");
    let newContent = xhr.responseText
    newDiv.appendChild(newContent)
    
    var currentDiv = document.getElementById("root");
    document.body.insertBefore(newDiv, currentDiv);
    
    // document.createElement() and appendChild() are preferred. No innerHTML or
    // something alike
}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page
