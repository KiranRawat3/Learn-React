import react from "react";
import ReactDOM from "react-dom";
//const name = 'Josh Perez';
function FormatName(user:any):string{
  
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  const element = (
    <h1>
      Hello, {FormatName(user)}!
    </h1>
  );
  
export default FormatName;