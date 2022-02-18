function addSrc(src) {
  const srcipt = document.createElement("script")
  srcipt.src = src
  srcipt.type = "text/javascript"
  
}

addSrc("http://xxx.xxx.com/xxx.js?callback=handleRes")

function handleRes (res) {
  console.log(res);
}

handleRes({a: 1, b: 2});