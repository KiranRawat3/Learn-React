import React ,{useState} from "react";
 
var userDetailContext=React.createContext(null);
export default function Context(){
 var[userDetail]:any =useState({
    name:"kiran",
    age:22
  });
 return(
    <userDetailContext.Provider value={userDetail}>
     <h1>this is parent component</h1>
     <ChildComponent userDetail={userDetail}/>
    </userDetailContext.Provider>
  );
 }
 function ChildComponent(props:any){
  return(
   <>
   <h2>this is child component</h2>
   <SubChildComponent />
   </>
  );
 }

 function SubChildComponent(props:any)
{
var contextData :any=React.useContext(userDetailContext);
return(
    <div>
    <h3>this is sub child</h3>
    <h4>User name: {contextData.name}</h4>
    <h4>User age:{contextData.age}</h4>
    </div>
);
}
  