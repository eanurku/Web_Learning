const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log("data...")
  }
  
  console.log('Before')
  doSomething()
  console.log('After')