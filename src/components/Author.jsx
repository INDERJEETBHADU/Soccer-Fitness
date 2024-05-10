import React from "react";
import author from "../assets/images/png/author.webp";
import rleative_ellipse from "../assets/images/svg/author_ellipse_img.svg";
import ellipse_right_about from "../assets/images/svg/right_ellipse_about_sec.svg";
import left_ellipse_send from "../assets/images/svg/left-ellipse_send.svg";
import { Insta } from "../common/Icon";

function Author() {
  return (
    <>
      <div className="  bg-black position-relative ">
        <div className="container-2">
          <div className="row about_sec_padding">
            <div className="col-md-6 col-12">
              <div className=" position-relative">
                <img
                  data-aos="zoom-in-up"
                  className=" w-100 max_w_author_img"
                  src={author}
                  alt="author"
                />
                <div className=" position-absolute d-none d-xl-block author_relative_ellipse">
                  <img src={rleative_ellipse} alt="rleative_ellipse" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-4 pt-md-0 d-flex justify-content-md-end align-items-end">
              <div className=" max_w_520">
                <h5 className=" mb-0 fw-bold  text-30 lh-37 ff-euro  color-grey text-capitalize">
                  About the <span className=" color-yellow ">Author</span>
                </h5>
                <p className=" mb-0 ff-manrope fw-normal mt-3 text-18 lh-28 color-grey">
                  Francesco is a Pro fitness coach currently working as head of
                  Sport Science for Toronto FC Academy. He is a registered
                  nutritionist, certified strength and conditioning specialist,
                  holds a Master’s in exercise science and is a national level
                  soccer coach.
                </p>
                <p className=" mb-0 ff-manrope fw-normal mt_10 text-18 lh-28 color-grey">
                  He has been a personal performance coach to a 1000+ elite
                  level footballers ranging from youth internationals all the
                  way to top level pro’s
                </p>
                <p className=" mb-0 ff-manrope fw-normal mt_10 text-18 lh-28 color-grey">
                  Francesco believes every footballer should have access to a
                  rock-solid S&C program alongside a quality nutrition plan to
                  improve the chances of crushing their genetic athletic
                  potential and becoming the best version of themselves.s
                </p>
                <div className=" d-flex align-items-center gap-3 mt_17">
                  <a
                    href="https://www.instagram.com/accounts/password/reset/"
                    target="_blank"
                  >
                    <Insta />
                  </a>
                  <h2 className=" mb-0 ff-euro fw-bold  text-26 lh-33  color-grey text-capitalize">
                    Hypervive
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" position-absolute ellipse_right_about">
          <img
            className=" d-none d-lg-block"
            src={ellipse_right_about}
            alt="ellipse_right_about"
          />
        </div>
        <div className=" position-absolute d-none d-xl-block  left_ellipse_send">
          <img src={left_ellipse_send} alt="left_ellipse_send" />
        </div>
      </div>
    </>
  );
}

export default Author;
