//promise
const sleep = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timer);
  })
}

sleep(2000).then(() => {
  console.log('1')
})

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function init() {
  var temp = await sleep(2000);
  console.log("YJJ"); //2s后执行
}

init();