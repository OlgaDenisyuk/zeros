module.exports = function zeros(expression) {
  function Firstzeros(n) {
    var counter = 0;
    for (var i = 5; n/i >= 1; i *= 5)
    counter += Math.floor(n/i);
    return counter;
    }
    
    let ar =[], str='', slength=0, sum=0, sum2=0, sum5=0, sum10=0, sum25=0, two=0, five=0, fivty=0; ten=0;
    ar = expression.split(/\*/);
    ar.forEach(element => {
    str = element;
    slength = str.length;

    if(str[slength-1] != str[slength-2]){
        str = str.slice(0, slength-1);
        sum += Firstzeros(str);
    }
    else{
        str = str.slice(0, slength-2);
           
            if(str % 2==0){ 
                let j=2;
                for(let i=2; i<=str; i++){
                  j=i;
                     while(j % 2 == 0) {
                       sum2++;
                       j=j/2;
                     }
                   } 

                if(str >=10 ) { 
                    ten =Math.floor(str/10);
                    sum10 +=ten;    
                  fivty = Math.floor(str/50);           
                }       
            }
            else{
                five =  Math.round(str/10);
                sum5 +=five;
            }   
sum5 +=fivty;   
sum2 -=sum10;                 
sum25 = Math.min(sum2, sum5);
    }

    });
    return sum + sum10 + sum25;
}
