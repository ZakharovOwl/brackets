module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map( (item) => item.join("") );
    //console.log(brackets);

    let bracketsStr = str.split('');
    for(let i = 0; i<bracketsStr.length;i++){
        for(let a = 0; a<bracketsConfig.length; a++){
            //console.log(brackets[a][1]);
            //console.log(bracketsStr[i+1]);
            
            if(bracketsStr[i] === brackets[a][0] && bracketsStr[i+1] === brackets[a][1]){
                bracketsStr.splice(i, 2);
                i=-1;
            } 
        }
    }
    return bracketsStr.length === 0 ? true : false;
}
