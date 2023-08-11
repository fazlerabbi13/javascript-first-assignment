function findAddress(obj) {
     let addressOutput = Object.values(address);
    //  return addressOutput;
     obj.street = obj.street|| '_';
    obj.house = obj.house || '_';
    obj.society = obj.society || '_';
    return obj;
}
let address= {
    street:10,
   house:"15A",
   society:"Earth Perfect" 
}
console.log(findAddress(address))

