import React from "react";
import Nav from "./Nav";
import cover from "../assets/images/png/cover-img.webp";

function Header() {
  return (
    <>
      <div className=" bg_header_img d-flex flex-column  ">
        <Nav />
        <div className="container-2  d-flex flex-column flex-grow-1 justify-content-center">
          <div className="row py-5 py-md-0">
            <div className="col-md-7  col-12 d-flex align-items-center">
              <div className="">
                <h3 className=" mb-0 ff-euro  fw-bold  text-45 lh-59 color-grey">
                  Get The eBook That Reveals{" "}
                  <span className=" color-yellow text-47 lh-62">
                    The 7 Fitness Myths
                  </span>{" "}
                  That{" "}
                  <span className=" text_nowrap">Are Holding You Back</span>{" "}
                  From Experiencing{" "}
                  <span className=" d-xlmd--block">Top-Level Fitness</span>
                </h3>
              </div>
            </div>
            <div className="col-md-5  pt-3 pt-sm-4 pt-md-0 col-12 d-flex justify-content-md-center">
              <div className="">
                <img className=" max_338_img" src={cover} alt="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
