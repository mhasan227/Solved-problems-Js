function calculateStrikeRate(run, ball){
    return ((run / ball) * 100).toFixed(2); 
}

console.log(calculateStrikeRate(45,30));