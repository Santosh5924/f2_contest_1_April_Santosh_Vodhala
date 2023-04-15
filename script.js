

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(function(el){
      if(el.profession ==="developer"){
        console.log(el);
      }
    })
    
  
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(function(el){
      if(el.profession ==="developer"){
        console.log(el);
      }
    })
    
    
  }
  
  function addData() {
    let add = {id:4,name:"santosh",age:"22",profession:"Analyst"};
    arr.push(add);
    console.log(arr);
  }
  
  function removeAdmin() {
    updatedArr = arr.filter(function(el){
      return el.profession !== "admin" 
    });
    console.log(updatedArr);
  
  }
  
  function concatenateArray() {
    let new_arr = [
      { id: 4, name: "Anupam", age: "25", profession: "cloud Achitect" },
      { id: 5, name: "Sumit", age: "26", profession: "Ktor" },
      { id: 6, name: "Narender", age: "26", profession: "Analyst" },
    ];
    let newA = arr.concat(new_arr);
     console.log(newA);
  }