function matchFinder(string1, string2) 
     {
        if (string1.includes(string2)) {
             return true;
        }
        if(string1&&string1 !== typeof String){
            return "invalid"
        }
        return false;
        
    }
    
    const String1 = "hello world";
    const String2 = "hello";
    const result = matchFinder(String1, String2);
    console.log(result);