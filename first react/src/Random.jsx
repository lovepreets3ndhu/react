function Random(){
  let numbers=Math.random()*10
  return <h2>Random number is:{Math.round(numbers)}</h2>
}

export default Random;