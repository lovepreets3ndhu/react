function Hello(){
  let myName='Lovepreet';
  let fullNmae=()=>{
    return myName+' Singh';
  }
  return <h3>
    This is the best library said by {fullNmae()}
  </h3>
}

export default Hello;