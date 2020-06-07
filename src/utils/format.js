function dataType(x) {
    if (Math.round(x) === x ){
        return 'integer';
    }
    return 'float';
}

export function numberwithCommas(x){
    if(dataType(x) === 'float')
    {
        x=x.toString();
        var lastThree = x.substring(x.length-6);
        var otherNumbers = x.substring(0,x.length-6);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }else{
        x=x.toString();
        lastThree = x.substring(x.length-3);
        otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }
    
}

