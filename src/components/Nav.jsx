import React from "react";
import Commonbtn from "../common/Commonbtn";

function Nav() {
  return (
    <>
      <nav className=" nav_box d-flex align-items-center">
        <div className="container-2 w-100 ">
          <div className="  d-flex align-items-center pt-3 justify-content-between">
            <h1 className=" mb-0 text-uppercase cursor_pointer ff-manrope fw-bold  text-18  lh-14 text-white">
              logo
            </h1>
            <ul className=" mb-0 ">
              <li>
                <Commonbtn text="GET IN TOUCH" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
