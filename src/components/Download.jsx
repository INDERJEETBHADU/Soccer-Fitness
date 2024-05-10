import React from "react";
import Commonbtn from "../common/Commonbtn";
import download_right_ellipse from "../assets/images/svg/right_ellipse_download.svg";

function Download() {
  return (
    <>
      <div className=" bg-black mt_neg_2 download_sec_padding position-relative">
        <div className="container-2">
          <div className=" d-flex justify-content-center">
            <div
              className="download_box  mb-1  position-relative overflow-hidden"
              data-aos="flip-up"
            >
              <p className="  color-grey  ff-manrope fw-normal text-18 lh-28 text-center">
                If you’re reading this, most likely you’re in search of the keys
                that unlock world class performance…..performance that can get
                you to the next level of your playing career …. And let you
                create a lifestyle that you’ve always dreamed of… right?
              </p>
              <p className="  color-grey  ff-manrope fw-normal text-18 lh-28 text-center">
                Well there’s a big obstacle in your way…… one that you most
                likely don’t even notice….. like a hacker whose stolen your
                starting spot…..and you have no control over it.
              </p>
              <p className="  color-grey  ff-manrope fw-normal text-18 lh-28 text-center">
                That annoying little hacker is simply a lack of knowledge.
                Sounds ridiculous, right? Stick with me here…. If I knew back
                then (in my playing days) what I know now, I would probably
                still be playing instead of writing this eBook.
              </p>
              <p className="  color-grey  ff-manrope fw-normal text-18 lh-28 text-center">
                Early on in my career I realized that in order to get to the
                next level I needed to get stronger, pack on some lean muscle,
                improve my endurance, increase my sprint speed & develop robust
                change of direction qualities.
              </p>
              <p className="  color-grey  ff-manrope fw-normal text-18 lh-28 text-center">
                Problem was... I had no idea how to improve these qualities. I
                needed help. I spent majority of my time researching on social
                media platforms & doing workouts that got me minimal results.
              </p>
              <p className="  color-grey  ff-manrope fw-normal text-18 lh-28 text-center">
                Once I figured out the secret sauce to improving all the
                qualities mentioned above, getting fit became effortless. No
                more stress, disappointment, anger or frustration. I want you to
                feel that too. This short eBook can provide you with the tools
                you need to start getting better results out of your current
                programs, while doing less not more.
              </p>
              <div className=" pt-3 pt-sm-3 d-flex justify-content-center">
                <Commonbtn text="Download Now" />
              </div>
              <div className="download_box_inner_ellipse d-none d-sm-block position-absolute"></div>
            </div>
          </div>
        </div>
        <div className=" position-absolute d-none  d-md-block download_right_ellipse">
          <img src={download_right_ellipse} alt="download_right_ellipse" />
        </div>
      </div>
    </>
  );
}

export default Download;
