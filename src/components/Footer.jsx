import React from "react";
import { Instagram, Music } from "../common/Icon";

function Footer() {
  return (
    <>
      <div className=" bg-black mt_neg_2">
        <div className="container-2">
          <div className=" pt_47">
            <h2 className=" mb-0  cursor_pointer ff-euro  fw-bold  text-26 lh-33 color-grey text-center ">
              Hypervive
            </h2>
            <p className=" mb-0 ff-manrope fw-normal text-14 lh-23 text-center color-lightgrey mt_19">
              Connect with us on social media
            </p>
            <div className=" d-flex  gap-2 justify-content-center mt-3">
              <a
                className=" d-flex justify-content-center align-items-center icon_circle"
                href="https://music.com/"
                target="_blank"
              >
                <Music />
              </a>
              <a
                className=" d-flex align-items-center justify-content-center icon_circle"
                href="https://www.instagram.com"
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <div className=" footer_line mt-4 "></div>
        </div>
        <div className="  pb-2">
          <p className=" mb-0 ff-manrope fw-normal text-14 lh-23 text-center  color-lightgrey mt-2">
            Copyright © {new Date().getFullYear()} HyperVive | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
