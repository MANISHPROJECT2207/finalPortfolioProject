import React from "react";
import Userdetails from "../components/Userdetails";
import Education from "../components/Education";
import Experience from "../components/Experience";

const Portfolio = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container flex-lg-row">
            <a className="navbar-brand mx-lg-auto mb-lg-4" >
              <span className="h3 fw-bold d-block" style={{ height: "8px" }}>
                Manish Sharma
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto flex-lg-row text-lg-center">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="content-wrapper">
          {/* HOME */}
          <section
            id="home"
            className="full-height px-lg-5 justify-content-center"
            style={{ paddingTop: "130px" }}
          >
            <Userdetails />
          </section>
          {/* //HOME */}
          {/* ABOUT */}
          <section id="about" className="full-height px-lg-5">
            <div className="container">
              <div
                className="row pb-4"
                //   data-aos="fade-up"
              >
                <div className="col-lg-8">
                  <h6 className="text-brand">ABOUT</h6>
                  {/* <h1>My Education & Experiance</h1> */}
                </div>
              </div>
              <div className="row gy-5">
                <div className="col-lg-6">
                  <Education />
                </div>
                <div className="col-lg-6">
                  <Experience />
                </div>
              </div>
            </div>
          </section>
          {/* //ABOUT */}.
          <section id="skills" className="full-height px-lg-5">
            <div className="container">
              <div
                className="row pb-4"
                //   data-aos="fade-up"
              >
                <div className="col-lg-8">
                  <h6 className="text-brand">Skills</h6>
                  {/* <h1>My Education & Experiance</h1> */}
                </div>
              </div>
              <div className="row gy-5">
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <h3
                      className="mb-1"
                      // data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      Technology
                    </h3>
                    <div
                      className="col-12"
                      // data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="bg-base p-3 PY-1 rounded-4 shadow-effect">
                        <ul>
                          <li className="mb-0 fw-bold">Html</li>
                          <li className="mb-0 fw-bold">CSS</li>
                          <li className="mb-0 fw-bold">JAVASCRIPT</li>
                          <li className="mb-0 fw-bold">REACTJS</li>
                          <li className="mb-0 fw-bold">EXPRESSJS</li>
                          <li className="mb-0 fw-bold">REDUX</li>
                          <li className="mb-0 fw-bold">MONGODB</li>
                          <li className="mb-0 fw-bold">DJANGO</li>
                        </ul>
                      </div>
                    </div>
                    <h3
                      className="mb-1"
                      // data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      Tools
                    </h3>
                    <div
                      className="col-12"
                      // data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="bg-base p-3 PY-1 rounded-4 shadow-effect fw-bold">
                        <ul>
                          <li className="mb-0">VS CODE</li>
                          <li className="mb-0">MYSQL</li>
                          <li className="mb-0">GITHUB</li>
                          <li className="mb-0">POSTGRESQL</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <h3
                      className="mb-1"
                      // data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      Language
                    </h3>
                    <div
                      className="col-12"
                      //  data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="bg-base p-3 PY-1 rounded-4 shadow-effect fw-bold">
                        <ul>
                          <li className="mb-0">C</li>
                          <li className="mb-0">C++</li>
                          <li className="mb-0">JAVA</li>
                          <li className="mb-0">PYTHON</li>
                          <li className="mb-0">OOPS</li>
                          <li className="mb-0">JAVASCRIPT</li>
                        </ul>
                      </div>
                    </div>
                    <h3
                      className="mb-1"
                      // data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      CourseWork
                    </h3>
                    <div
                      className="col-12"
                      //  data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="bg-base p-3 PY-1 rounded-4 shadow-effect fw-bold">
                        <ul>
                          <li className="mb-0">DATA STRUCTURE AND ALGORITHM</li>
                          <li className="mb-0">DATABASE MANAGEMENT SYSTEM</li>
                          <li className="mb-0">OPERATING SYSTEM</li>
                          <li className="mb-0">OBJECT ORIENTED PROGRAMMING</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="work" className="full-height px-lg-5">
            <div className="container">
              <div
                className="row pb-4"
                //   data-aos="fade-up"
              >
                <div className="col-lg-8">
                  <h6 className="text-brand">PROJECT</h6>
                </div>
              </div>
              <div className="row gy-4">
                <div
                  className="col-md-4 show-sidebar"
                  // data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="card-custom rounded-4 bg-base shadow-effect">
                    <div
                      className="card-custom-image rounded-4"
                      style={{ height: "170px" }}
                    >
                      <img
                        className="rounded-4"
                        src="./assets/images/rtu1.PNG"
                        alt=""
                      />
                    </div>
                    <div
                      className="card-custom-content p-4"
                      style={{ height: "180px" }}
                    >
                      <h2>Manik - Education Platform</h2>
                      <a href="#" className="link-custom">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <aside className="sidebar">
                  <div className="block-dom col-0 col-md-7 col-lg-7" />
                  <div
                    className="sidebar-content col-12 col-md-5 col-lg-5"
                    style={{ backgroundColor: "#022a30" }}
                  >
                    <button
                      className="btn close-sidebar border-0"
                      style={{ color: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div
                      className="col-12 col-sm-12 col-md-12 border-0"
                      style={{ backgroundColor: "#022a30" }}
                    >
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div
                          className="carousel-inner"
                          style={{ height: "250px" }}
                        >
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src="./assets/images/rtu1.PNG"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="./assets/images/rtu2.PNG"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="./assets/images/rtu3.PNG"
                              alt="Second slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon text-bg-danger"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon text-bg-danger"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      <div className="card shadow-sm mb-2-sm border-0">
                        <div
                          className="card-body p-3 text-center"
                          style={{ backgroundColor: "#022a30" }}
                        >
                          <h3 className="h2 text-primary p-2">
                            Manik - Rtu Helper
                          </h3>
                          <p className="h5"></p>
                          <ul>
                            <li>
                              It Consists All the Syllabus youtube Videos and
                              Article Links.
                            </li>
                            <li>There Are all the subjects of B.Tech. </li>
                          </ul>
                          <p />
                          <p className="text-brand mb-2 my-3">
                            Tech Stack : HTML, CSS, BOOTSTRAP, JS, DJANGO
                          </p>
                          <a
                            href="https://github.com/MANISHPROJECT2207/manik"
                            target="_blank"
                            className="btn btn-primary my-3 py-2 px-4"
                          >
                            Github Link
                          </a>
                        </div>
                        {/* ./card-body */}
                      </div>
                    </div>
                    {/* ./card */}
                  </div>
                </aside>
                <div
                  className="col-md-4 show-sidebar value2"
                  // data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="card-custom rounded-4 bg-base shadow-effect">
                    <div
                      className="card-custom-image rounded-4 "
                      style={{ height: "170px" }}
                    >
                      <img
                        className="rounded-4"
                        src="./assets/images/snake1.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="card-custom-content p-4"
                      style={{ height: "180px" }}
                    >
                      <h2>Snake Game With a Twist</h2>
                      <a href="#" className="link-custom">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <aside className="sidebar sidebar2">
                  <div className="block-dom2 col-0 col-md-7 col-lg-7" />
                  <div
                    className="sidebar-content col-12 col-md-5 col-lg-5"
                    style={{ backgroundColor: "#022a30" }}
                  >
                    <button
                      className="btn close-sidebar border-0"
                      style={{ color: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div
                      className="col-12 col-sm-12 col-md-12 border-0"
                      style={{ backgroundColor: "#022a30" }}
                    >
                      <div
                        id="carouselExampleControls2"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div
                          className="carousel-inner"
                          style={{ height: "250px" }}
                        >
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src="./assets/images/snake1.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="./assets/images/project2.PNG"
                              alt="Second slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls2"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls2"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      <div className="card shadow-sm mb-2-sm border-0">
                        <div
                          className="card-body p-3 text-center"
                          style={{ backgroundColor: "#022a30" }}
                        >
                          <h3 className="h2 text-primary p-2">
                            Snake Game With a Twist
                          </h3>
                          <p className="h5"></p>
                          <ul>
                            <li>
                              Developed a JAVASCRIPT Project Snake and Food
                              Game.
                            </li>
                            <li>
                              In This Project I have generated some twists like
                              different foods will have different effects.
                            </li>
                          </ul>
                          <p />
                          <p className="text-brand mb-2 my-3">
                            Tech Stack : HTML, CSS, JS , DSA
                          </p>
                          <a
                            href="https://manishproject2207.github.io/DSA-PROJECTS/"
                            target="_blank"
                            className="btn btn-primary my-3 py-2 px-4"
                          >
                            Live Link
                          </a>
                        </div>
                        {/* ./card-body */}
                      </div>
                      {/* ./card */}
                    </div>
                  </div>
                </aside>
                <div
                  className="col-md-4 show-sidebar value3"
                  // data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="card-custom rounded-4 bg-base shadow-effect">
                    <div
                      className="card-custom-image rounded-4"
                      style={{ height: "170px" }}
                    >
                      <img
                        className="rounded-4"
                        src="src/assets/images/crud1.PNG"
                        alt=""
                      />
                    </div>
                    <div
                      className="card-custom-content p-4"
                      style={{ height: "180px" }}
                    >
                      <h2>Crud Operation And CRM</h2>
                      <a href="#" className="link-custom">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <aside className="sidebar sidebar3" data-aos-delay={1200}>
                  <div className="block-dom3 col-0 col-md-7 col-lg-7" />
                  <div
                    className="sidebar-content col-12 col-md-5 col-lg-5"
                    style={{ backgroundColor: "#022a30" }}
                  >
                    <button
                      className="btn close-sidebar border-0"
                      style={{ color: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div
                      className="col-12 col-sm-12 col-md-12 border-0"
                      style={{ backgroundColor: "#022a30" }}
                    >
                      <div className="card shadow-sm mb-2-sm border-0">
                        <div
                          className="card-body p-3 text-center"
                          style={{ backgroundColor: "#022a30" }}
                        >
                          <div
                            id="carouselExampleControls3"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div
                              className="carousel-inner"
                              style={{ height: "250px" }}
                            >
                              <div className="carousel-item active">
                                <img
                                  className="d-block w-100"
                                  src="./assets/images/crud1.PNG "
                                  alt="First slide"
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  className="d-block w-100"
                                  src="./assets/images/crud2.PNG"
                                  alt="Second slide"
                                />
                              </div>
                            </div>
                            <a
                              className="carousel-control-prev"
                              href="#carouselExampleControls3"
                              role="button"
                              data-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Previous</span>
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carouselExampleControls3"
                              role="button"
                              data-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                          <h3 className="h2">Crud Operation And CRM</h3>
                          <p className="h5"></p>
                          <ul>
                            <li>
                              Developed a MERN Website that contains pages
                              (Admin,Contact-us) and fetching data from Backend,
                              Desgining of a Backend, Middlewares and Connecting
                              to a Database(MONGODB) using Express.js.
                            </li>
                            <li>
                              It includes User Authentication,Login,Signup,Admin
                              Data etc.
                            </li>
                          </ul>
                          <p />
                          <p className="text-brand mb-2 my-3">
                            Tech Stack : HTML, CSS, JS , REACTJS, EXPRESSJS
                            (MERN STACK)
                          </p>
                          <a
                            href="https://github.com/MANISHPROJECT2207/all-bAckend---frontend"
                            target="_blank"
                            className="btn btn-primary my-3 py-2 px-4"
                          >
                            Github Link
                          </a>
                        </div>
                        {/* ./card-body */}
                      </div>
                      {/* ./card */}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
          {/* CONTACT */}
          <section id="contact" className="full-height px-lg-5">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 pb-4" data-aos="fade-up">
                  <h6 className="text-brand">CONTACT</h6>
                </div>
                <div
                  className="col-lg-6"
                  // data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <form
                    method="post"
                    onsubmit="return onSubmit(event)"
                    className="row g-lg-3 gy-3"
                  >
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="form-control"
                        placeholder="Enter your message"
                        maxLength={100}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-12 d-grid">
                      <button type="submit" className="btn btn-brand">
                        Contact me
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* //CONTACT */}
        </div>
        
      <button type="button" className="btn btn-danger btn-floating" id="btn-back-to-top">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
        </svg>
      </button>
      </div>
      

    </div>
  );
};

export default Portfolio;
