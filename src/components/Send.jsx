import React from "react";
import laptop from "../assets/images/png/laptop.webp";
import Commonbtn from "../common/Commonbtn";
import send_left_ellipse from "../assets/images/svg/left-ellipsee_send_sec.svg";

function Send() {
  return (
    <>
      <div className=" bg-black mt_neg_2 position-relative padding_send_sec">
        <div className="container-2">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className=" position-relative">
                <img
                  data-aos="zoom-in"
                  className=" position-relative z-3 max_w_530"
                  src={laptop}
                  alt="laptop"
                />
                <div className="laptop_ellipse laptop_ellipse_pos d-none d-xl-block position-absolute"></div>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-md-end pt-4 pt-md-0 align-items-center">
              <div className=" max_w_522">
                <h3 className=" fw-bold  mb-0 ff-euro color-grey text-30  lh-37 text-capitalize">
                  Let me know where{" "}
                  <span className=" color-yellow">you want me to send it</span>
                </h3>
                <form className=" mt_17">
                  <input
                    className="  name_input mb-0 ff-manrope fw-normal text-16 lh-21 color-darkgrey"
                    placeholder="Name"
                    required
                    type="text"
                  />
                  <div className=" pt-1">
                    <input
                      className="  name_input mb-0 ff-manrope fw-normal text-16 lh-21 mt-2 color-darkgrey"
                      placeholder="Email"
                      required
                      type="email"
                    />
                  </div>
                  <div className=" mt-4 w-100 mt-lg-5">
                    <Commonbtn text="Send It Here!" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="  position-absolute send_left_ellipse ">
          <img src={send_left_ellipse} alt="send_left_ellipse" />
        </div>
      </div>
    </>
  );
}

export default Send;
