module.exports = function zeros(expression) {
  function zeros(n) {
    var counter = 0;
    for (var i = 5; n/i >= 1; i *= 5)
    counter += Math.floor(n/i);
    return counter;
    }
    
    let ar =[], str='', slength=0, sum=0, sum2=0, sum5=0, sum10=0, sum25=0, two=0, five=0;
    ar = expression.split(/\*/);
    ar.forEach(element => {
    str = element;
    slength = str.length;

    if(str[slength-1] != str[slength-2]){
        str = str.slice(0, slength-1);
        console.log(str);
        sum += zeros(str);
    }
    else{
        str = str.slice(0, slength-2);
        if(str >=10 ) { sum +=Math.floor(str/10);}
            if(str % 2==0){
                two = str/2;
                sum2 +=two;
            }
            else{
                five=Math.floor(str/5);
                sum5 +=five;
            }
sum25 = Math.min(sum2, sum5);
    }

    });
    
    return sum + sum25;
}
