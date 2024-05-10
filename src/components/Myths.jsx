import React from "react";
import myth from "../assets/images/png/myths.webp";

function Myths() {
  return (
    <>
      <div className=" bg_knowledege_img">
        <div className="container-2   pb-md-3">
          <div className="row py-md-5 py-3">
            <div className="col-md-8 d-flex align-items-center">
              <div className="">
                <h4 className=" ff-euro  fw-bold text-30 lh-49  text-black mb-0 text-capitalize">
                  With the right knowledge maintaining and improving your
                  fitness becomes effortless and enjoyable. Stop wasting time
                  you don’t have!
                </h4>
              </div>
            </div>
            <div className="col-md-4">
              <img
                data-aos="zoom-in-down"
                className=" w-100 max_w_310"
                src={myth}
                alt="myth"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myths;
