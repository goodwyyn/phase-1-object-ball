function gameObject(){
    const homeTeamDetails = {
        teamName:"Brooklyne Nets",
        colors:"Black, white",
        players:{
            name:"Alex Anderson",
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1,

 }
}
}
function gameObject(){
    const awayTeamDetails = {
        teamName:"Charlotte Hornets",
        colors:"Torquoise, Purple",
        players:{
            name:"jeff Adrien",
            number:4,
            shoe:18,
            points:10,
            rebounds:1,
            assists:1,
            steals:2,
            blocks:7,
            slamDunks:7,

 }
}
}
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())

  function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
  console.log(homeTeamName())