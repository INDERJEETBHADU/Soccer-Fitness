import React from "react";
import button_border from "../assets/images/svg/button_border.svg";

function Commonbtn(props) {
  return (
    <div className=" button_border position-relative w-contant">
      <button className="   ff-euro fw-bold text-14 text-uppercase  lh-14 text-black comn_btn mb-0">
        {props.text}
      </button>
      <div className=" btn_black_brdr position-absolute border_line "></div>
    </div>
  );
}

export default Commonbtn;
