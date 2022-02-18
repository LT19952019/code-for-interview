const task =(timer, light, callback) => {
  setTimeout(() => {
    if(light === 'red') {
      red()
    }
    else if (light === 'green') {
      green()
  }
  else if (light === 'yellow') {
      yellow()
  }
  callback()
  },timer)
}

const step = () => {
  task(3000, 'red', () => {
      task(2000, 'green', () => {
          task(1000, 'yellow', step)
      })
  })
}
step()


const task = (timer, light) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
    }
    else if (light === 'green') {
        green()
    }
    else if (light === 'yellow') {
        yellow()
    }
    resolve()
    },timer)
  })
}
const step = () => {
  task(3000, 'red')
      .then(() => task(2000, 'green'))
      .then(() => task(2100, 'yellow'))
      .then(step)
}
step()

const taskRunner =  async () => {
  await task(3000, 'red')
  await task(2000, 'green')
  await task(2100, 'yellow')
  taskRunner()
}
taskRunner()
