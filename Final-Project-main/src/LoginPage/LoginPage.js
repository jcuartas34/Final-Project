import React from 'react';

function LoginPage() {
  return (
    <div className="Login">
      <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" value="John"></input> <br></br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" value="Doe"></input><br></br>
      <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default LoginPage;