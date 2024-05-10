import React from "react";
import content from "../assets/images/png/content_laptop.webp";
function Content() {
  return (
    <>
      <div className=" bg-black mt_neg_2 overflow-x-hidden ">
        <div className="container-2">
          <div className="content_bg_image_box position-relative">
            <div className="row">
              <div className=" col-md-6 col-12">
                <h2 className="  mb-0  ff-euro fw-bold text-45 lh-59 text-black">
                  7 Fitness Myths to Avoid
                </h2>
                <p className=" mb-0 ff-manrope fw-normal text-18 lh-28 text-black mt-2">
                  Grab your free copy now!
                </p>
                <div className=" mt-4 pt-2">
                  <div className="border_black_free w-contant position-relative">
                    <button className=" mb-0  free-btn ff-euro  fw-bold text-16  lh-16 color-grey">
                      Download For Free
                    </button>
                    <div className="yellow_line_border yellow_line_pos position-absolute"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pt-3 pt-sm-4 pt-md-0">
                <div className="  laptop_pos">
                  <img
                    data-aos="zoom-out-down"
                    className=" w-100 "
                    src={content}
                    alt="content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
