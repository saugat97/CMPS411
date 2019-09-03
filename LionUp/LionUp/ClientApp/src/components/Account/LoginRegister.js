import React, { useRef } from "react";
import "./Account.css";

// const modal = document.getElementById("id01");

//// window.onclick = function(event) {
////   if (event.target === modal) {
////     modal.style.display = "none";
////   }
//// };

function LoginRegister() {
  const modal = useRef(null);

    const handleClick = () => {
        //alert("Clicked!");
        modal.current.toString();
    };
  return (
    <div>
      <div className="bg"></div>

          <div className="form">
              <div className="form-title">
          Login
          <div className="form-subtitle"> Login to continue using Lion Up App.</div>
        </div>
              <div className="form-content">
          <input type="text" placeholder="firstname.lastname@selu.edu" />
        </div>
              <div className="form-content">
          <input type="text" placeholder="*******" />
        </div>
              <div className="form-btn">
                  <button className="btn" type="submit">
            Login
          </button>
        </div>
        <button
                  className="btn-register"
          ref={modal}
          onClick={handleClick}
          style={{ display: "block" }}
          //   onclick="document.getElementById('id01').style.display='block'"
        >
          Click here to Register ->
        </button>

              <div id="id01" ref={modal} className="modal">
                  <form className="modal-content animate" action="/action_page.php">
            <span
              onclick="document.getElementById('id01').style.display='none'"
                          className="close"
              title="Close Modal"
            >
              &times;
            </span>
            <div align="center">
                          <div className="form-register">Register</div>
                          <div className="form-model">
                <input
                  type="text"
                  placeholder="First Name"
                  name="uname"
                  required
                />
              </div>
                          <div className="form-model">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="uname"
                  required
                />
              </div>
                          <div className="form-model">
                <input
                  type="text"
                  placeholder="firstname.lastname@selu.edu"
                  name="uname"
                  required
                />
              </div>
                          <div className="form-model">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                                  className="form-content"
                />
              </div>
                          <div className="form-model">
                              <select className="dropbtn dropdown-content">
                                 
                    <option>
                      <p>Major</p>
                    </option>
                    <option>
                      <p>Computer Science</p>
                    </option>
                    <option>
                      <p>Mathematics</p>
                    </option>
                  
                </select>
              </div>
                          <button type="submit" className="btn btn-model">
                Register
              </button>
              <button
                onclick="document.getElementById('id1').style.display='none'"
                              className="btn btn-cancel"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginRegister;
