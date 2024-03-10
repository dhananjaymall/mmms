import Image from "next/image";
import React from "react";
import img1 from '../../public/Images/logo3.png';
import img2 from '../../public/Images/hero2.png';
import img3 from '../../public/Images/about1.png';
import img4 from '../../public/Images/team1.jpg';
import img5 from '../../public/Images/pic3.png';
import img6 from '../../public/Images/team2.jpg';
import img7 from '../../public/Images/pic2.png';
import img8 from '../../public/Images/team6.jpg';
import img9 from '../../public/Images/team3.jpg';
import img10 from '../../public/Images/team4.jpg';
import img11 from '../../public/Images/pic1.png';

const FrontPage = () => {
  return (
    <>
      <header>
        <div class="logo">
          <Image src={img1} alt="" />
        </div>

        <nav class="navbar">
          <a href="#Home">Home</a>
          <a href="#Home">About</a>
          <a href="#Home">Service</a>
          <a href="#Home">Gallery</a>
          <a href="#Home">Blog</a>
          <a href="#Home">Contact</a>
        </nav>

        <div class="right-icons">
          <div id="menu-bars" class="fas fa-bars"></div>
          <div class="btn">Make Appointment</div>
        </div>
      </header>

      {/* <!-- header section ended --> */}

      {/* <!-- Home section started --> */}

      <div class="main-home">
        <div class="home">
          <div class="home-left-content">
            <span>welcome to hospital management</span>
            <h2>
              We take care our
              <br /> Patients Healths
            </h2>
            <p class="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              numquam veniam porro eius, fugiat vero ut ipsum libero
            </p>

            <div class="home-btn">
              <a href="">Read More</a>
              <a class="homebtnsec" href="">
                Appointment
              </a>
            </div>
          </div>

          <div class="home-right-content">
            <Image src={img2} alt="" />
          </div>
        </div>
      </div>

      <div class="technology">
        <div class="main-technology">
          <div class="inner-technology">
            <span></span>
            <i class="fi fi-tr-hands-heart"></i>
            <h2>Quality & Safety</h2>
            <p>
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </div>

          <div class="inner-technology">
            <span></span>
            {/* <i class="fi fi-rr-doctor"></i> */}
            <h2>Quality & Safety</h2>
            <p>
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </div>

          <div class="inner-technology">
            <span></span>
            {/* <i class="fi fi-tr-user-md"></i> */}
            <h2>Quality & Safety</h2>
            <p>
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- home section ends --> */}

      {/* <!-- About us section started --> */}

      <div class="main-about">
        <div class="about-heading">About Us</div>

        <div class="inner-main-about">
          <div class="about-inner-content-left">
            <Image src={img3} alt="" />
          </div>

          <div class="about-inner-content">
            <div class="about-right-content">
              <h2>
                Were setting Standards in Research <br /> whats more, Clinical
                Care.
              </h2>
              <p>
                We provide the most full medical services, so every person could
                have the pportunity o receive qualitative medical help.
              </p>
              <p class="aboutsec-content">
                Our Clinic has grown to provide a world class facility for the
                treatment of tooth loss, dental cosmetics and bore advanced
                restorative dentistry. We are among the most qualified implant
                providers in the AUS with over 30 years of uality training and
                experience.
              </p>
              <button class="aboutbtn">Read More</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About us section ends --> */}

      {/* <!-- our doctors --> */}

      <div class="main-doctors">
        <div class="doctors-heading">
          <h2>Our Doctors</h2>
        </div>

        <div class="main-inner-doctor">
          <div class="doc-poster">
            <div class="doc-icons">
              {/* <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-heart"></i> */}
            </div>
            <Image src={img4} alt="" />

            <div class="doc-details">
              <h2>Mr Joe</h2>

              {/* <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i> */}
            </div>
          </div>

          <div class="doc-poster">
            <div class="doc-icons">
              {/* <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-heart"></i> */}
            </div>
            <Image src={img6} alt="" />
            <div class="doc-details">
              <h2>Mr Joe</h2>

              {/* <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i> */}
            </div>
          </div>

          <div class="doc-poster">
            <div class="doc-icons">
              {/* <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-heart"></i> */}
            </div>
            <Image src={img9} alt="" />
            <div class="doc-details">
              <h2>Mr Joe</h2>

              {/* <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i> */}
            </div>
          </div>

          <div class="doc-poster">
            <div class="doc-icons">
              {/* <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-heart"></i> */}
            </div>
            <Image src={img10} alt="" />
            <div class="doc-details">
              <h2>Mr Joe</h2>

              {/* <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i> */}
            </div>
          </div>

          <div class="doc-poster">
            <div class="doc-icons">
              {/* <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-heart"></i> */}
            </div>
            <Image src={img10} alt="" />
            <div class="doc-details">
              <h2>Mr Joe</h2>

              {/* <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i> */}
            </div>
          </div>

          <div class="doc-poster">
            <div class="doc-icons">
              {/* <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-eye"></i>
              <i class="fa-solid fa-heart"></i> */}
            </div>
            <Image src={img8} alt="" />

            <div class="doc-details">
              <h2>Mr Joe</h2>

              {/* <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- our doctors ended --> */}

      {/* <!-- our services --> */}

      <div class="our-service">
        <div class="service-heading">
          <h2>Our Services</h2>
        </div>

        <div class="main-services">
          <div class="inner-services">
            <div class="service-icon">
              {/* <i class="fa-solid fa-truck-medical"></i> */}
            </div>
            <h3>Health Check</h3>
            <p>
              We offer extensive medical procedures to outbound & inbound
              patients what it is and we are very proud achievement staff.
            </p>
          </div>

          <div class="inner-services">
            <div class="service-icon">
              {/* <i class="fa-regular fa-hospital"></i> */}
            </div>
            <h3>Health Check</h3>
            <p>
              We offer extensive medical procedures to outbound & inbound
              patients what it is and we are very proud achievement staff.
            </p>
          </div>

          <div class="inner-services">
            <div class="service-icon">
              {/* <i class="fa-regular fa-heart"></i> */}
            </div>
            <h3>Health Check</h3>
            <p>
              We offer extensive medical procedures to outbound & inbound
              patients what it is and we are very proud achievement staff.
            </p>
          </div>

          <div class="inner-services">
            <div class="service-icon">
              {/* <i class="fa-solid fa-notes-medical"></i> */}
            </div>
            <h3>Health Check</h3>
            <p>
              We offer extensive medical procedures to outbound & inbound
              patients what it is and we are very proud achievement staff.
            </p>
          </div>

          <div class="inner-services">
            <div class="service-icon">
              {/* <i class="fa-solid fa-list-check"></i> */}
            </div>
            <h3>Health Check</h3>
            <p>
              We offer extensive medical procedures to outbound & inbound
              patients what it is and we are very proud achievement staff.
            </p>
          </div>

          <div class="inner-services">
            <div class="service-icon">
              {/* <i class="fa-solid fa-user-doctor"></i> */}
            </div>
            <h3>Health Check</h3>
            <p>
              We offer extensive medical procedures to outbound & inbound
              patients what it is and we are very proud achievement staff.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- our services ended --> */}

      {/* <!-- customer review --> */}

      <div class="main-review">
        <section>
          <div class="review-heading">
            <h1>Our Customers Review</h1>
          </div>

          <div class="main-inner-review">
            <div class="review-inner-content">
              <div class="review-box">
                <Image src={img11} alt="" />

                <h2>Lara John</h2>
                <div class="review-stars">
                  {/* <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i> */}
                </div>

                <div class="review-text">
                  <p>
                    Optio quod assumenda similique provident aliquid corrupti
                    minima maxime tempore! Quas illo porro fuga consectetur
                    repellat{" "}
                  </p>
                </div>
              </div>

              <div class="review-box">
                <Image src={img7} alt="" />

                <h2>Lara John</h2>
                <div class="review-stars">
                  {/* <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i> */}
                </div>

                <div class="review-text">
                  <p>
                    Optio quod assumenda similique provident aliquid corrupti
                    minima maxime tempore! Quas illo porro fuga consectetur
                    repellat
                  </p>
                </div>
              </div>

              <div class="review-box">
                <Image src={img5} alt="" />

                <h2>Lara John</h2>
                <div class="review-stars">
                  {/* <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i> */}
                </div>

                <div class="review-text">
                  <p>
                    Optio quod assumenda similique provident aliquid corrupti
                    minima maxime tempore! Quas illo porro fuga consectetur
                    repellat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- customer review --> */}

      {/* <!-- footer --> */}

      <div class="main-footer">
        <div class="footer-inner">
          <div class="footer-content">
            <h1>Dummy Links</h1>
            <div class="link">
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
            </div>
          </div>

          <div class="footer-content">
            <h1>Dummy Links</h1>
            <div class="link">
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
            </div>
          </div>

          <div class="footer-content">
            <h1>Dummy Links</h1>
            <div class="link">
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
            </div>
          </div>

          <div class="footer-content">
            <h1>Dummy Links</h1>
            <div class="link">
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
            </div>
          </div>

          <div class="footer-content">
            <h1>Dummy Links</h1>
            <div class="link">
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer ended --> */}
    </>
  );
};

export default FrontPage;
