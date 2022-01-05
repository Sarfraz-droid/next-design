import React from "react";

import Navbar from "../components/Navbars/DemoNavbar";
import { Container, Row, Col, Button } from "reactstrap";

import { BsAsterisk, BsFillBarChartFill,BsArrowRightShort } from "react-icons/bs";

function Index() {
  return (
    <div>
      <Navbar />
      <div className="mx-lg-6 mt-6">
        <Row>
          <Col md="6">
            <div className="font-weight-600 text-center text-lg-left text-primary h6 ">
              <BsAsterisk />
              <span className="ml-2">JumpStart Your Career</span>
            </div>
            <div className="text-black text-center text-lg-left">
              <h1 className="font-weight-900 display-2 text-black">
                We Boost The Growth
              </h1>
              <h1 className="font-weight-900 display-2 text-black">
                for{" "}
                <span className="d-inline-block font-weight-900 text-primary">
                  Startup
                </span>{" "}
                to Fortune
              </h1>
              <h1 className="font-weight-900 display-2 text-black">
                500 Companies
              </h1>
            </div>
            <div className="w-lg-75 px-2 pl-lg-0 pr-lg-8 mt-3">
              <p className="font-weight-300 text-gray text-center text-lg-left">
                Get the most accurate leads, sales people training and
                conversions, tools and more - all within the same one billing.
              </p>
            </div>
            <div className="message-form mt-4 mb-7">
              <form className="d-flex">
                <div className="form-input">
                  <img
                    alt=""
                    src={require("../assets/img/form/FormInput.svg")}
                  />
                  <input type="text" placeholder="Email Address" />
                </div>
                <a className="form-button">
                  <img
                    alt=""
                    src={require("../assets/img/form/FormButton.svg")}
                  />
                </a>
              </form>
            </div>
          </Col>
          <Col className="d-lg-block d-none">
            <div className="hero-img h-100">
              <img
                className=""
                src={require("../assets/img/landingpage/bg.jpg")}
              />
              <img
                className=""
                src={require("../assets/img/landingpage/bg.jpg")}
              />
              <img
                className=""
                src={require("../assets/img/landingpage/bg.jpg")}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center d-flex align-items-center ">
          <Col
            lg="3"
            className="justify-content-center align-content-center d-flex flex-column align-items-lg-baseline"
          >
            <div className=" text-black font-weight-400 d-inline-block pt-3 border-top border-dark mb-3 text-center mx-auto mx-lg-0">
              Proud Pattern at Hubspot Segment
            </div>
          </Col>

          <Col className="justify-content-center align-content-center d-flex flex-column align-items-baseline">
            <ul className="list-unstyled p-2 companies-list d-flex justify-content-around align-content-center w-100 flex-lg-row flex-column">
              <li className="d-flex justify-content-center my-4 my-lg-auto">
                <img src={require("../assets/img/companies/amazon-2.svg")} />
              </li>
              <li className="d-flex justify-content-center my-4 my-lg-auto">
                <img src={require("../assets/img/companies/slack-2.svg")} />
              </li>
              <li className="d-flex justify-content-center my-4 my-lg-auto">
                <img src={require("../assets/img/companies/vmware-1.svg")} />
              </li>
              <li className="d-flex justify-content-center my-4 my-lg-auto">
                <img
                  src={require("../assets/img/companies/woocommerce-1.svg")}
                />
              </li>
              <li className="d-flex justify-content-center my-4 my-lg-auto">
                <img src={require("../assets/img/companies/youtube.svg")} />
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="px-lg-9 purpose-section py-6 mt-7">
        <Row>
          <Col
            lg="4"
            className="justify-content-center align-items-center d-flex flex-column text-center text-lg-left align-items-lg-baseline "
          >
            <div className="text-black-50 font-weight-600 opacity-5">
              ACHIEVE MORE
            </div>
            <div className="display-3 mx-2 ml-lg-0 mr-lg-5 mt-3 text-black pl-0 font-weight-900">
              Purpose of a convoy is to keep your team
            </div>
          </Col>
          <Col lg="4" className="pl-6 d-flex mt-4">
            <img
              className="icon rounded-pill chart"
              src={require("../assets/img/icons/landingpage/Chart.svg")}
            />
            <div className="p-3 pt-1">
              <h5 className="font-weight-600 text-black ">
                Building For Impact
              </h5>
              <p className="pt-3 text-muted">
                We identify and nurture a truly diverse team of designers,
                developers and marketers
              </p>
            </div>
          </Col>
          <Col lg="4" className="pl-6 d-flex mt-4">
            <img
              className="icon rounded-pill sync mt-2"
              src={require("../assets/img/icons/landingpage/Sync.svg")}
            />
            <div className="p-3">
              <h5 className="font-weight-600 text-black ">
                Building For Impact
              </h5>
              <p className="pt-3 t">
                We identify and nurture a truly diverse team of designers,
                developers and marketers
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="how-can-we-help my-9 d-flex flex-column justify-content-center  align-items-center text-center">
        <h1 className="text-black font-weight-900 w-lg-50 px-2 px-lg-9">
          How can we help your business?
        </h1>
        <p className="text-muted font-weight-400">
          When you resell besnik, you buils trust and increase
        </p>

        <Row className="w-100 cards-list  px-lg-9 mt-3">
          <Col lg="4">
            <div className="section-card border py-5 px-lg-4 border-top-0">
              <img
                className="my-3"
                alt=""
                src={require("../assets/img/landingpage/search.png")}
              />
              <h3 className="mt-3 h4 text-black font-weight-700">
                Find out what you need
              </h3>
              <p className="mx-4 font-weight-300 text-black opacity-4 lh-180">
                We present you a proposal and discuss nitty-gritty like
              </p>
            </div>
          </Col>
          <Col lg="4">
            <div className="section-card py-5 px-4 border-top-0 bg-white card-center">
              <img
                className="my-3"
                alt=""
                src={require("../assets/img/landingpage/computer.png")}
              />
              <h3 className="mt-3 h4 text-black font-weight-700">
                Find out what you need
              </h3>
              <p className="mx-4 font-weight-300 text-black opacity-4 lh-180">
                We present you a proposal and discuss nitty-gritty like
              </p>
            </div>
          </Col>
          <Col lg="4">
            <div className="section-card border py-5 px-4 border-top-0">
              <img
                className="my-3"
                alt=""
                src={require("../assets/img/landingpage/rocket.png")}
              />
              <h3 className="mt-3 h4 text-black font-weight-700">
                Find out what you need
              </h3>
              <p className="mx-4 font-weight-300 text-black opacity-4 lh-180">
                We present you a proposal and discuss nitty-gritty like
              </p>
            </div>
          </Col>
        </Row>
        <div className="mt-6">
          <Button
            className="primary-btn-shadow rounded-pill px-4 py-3"
            color="primary"
          >
            Become a Partner
          </Button>
        </div>
      </div>
      <div className="schedule my-1 my-lg-9 d-flex flex-column justify-content-center  align-items-center text-center">
        <Row className="w-100 px-lg-8">
          <Col lg="6" className="d-lg-block d-none">
            <img className="m-4 w-75" src={require("../assets/img/landingpage/chat.png")} />
          </Col>
          <Col lg="6" className="py-6 text-lg-left flex flex-column flex-lg-row justify-content-center align-items-center">
            <p className="font-weight-800 text-orange ">
              SCHEDULE
            </p>
            <h1 className="font-weight-800 text-darker display-4 ">
              Great Customer relationship starts here
            </h1>
            <p className="w-75 my-4 text-gray info">
              Aute dolor minim sit tempor sunt sunt aliquip excepteur adipisicing excepteur. Pariatur fugiat laborum id sint tempor laboris dolor. 
            </p>
            <a className="text-blue font-weight-700 flex justify-content-center">
              Learn more about publishing 
              <BsArrowRightShort className="h4 mr-3 align-self-center mb-0 text-blue"/>
            </a>
          </Col>
        </Row>
      </div>
      <div className="schedule my-1 my-lg-5 d-flex flex-column justify-content-center  align-items-center text-center">
        <Row className="w-100 px-lg-8">

          <Col lg="6" className="py-6 text-lg-left">
            <p className="font-weight-800 text-orange ">
              SCHEDULE
            </p>
            <h1 className="font-weight-800 text-darker display-4 ">
              Great Customer relationship starts here
            </h1>
            <p className=" my-4 text-gray info">
              Aute dolor minim sit tempor sunt sunt aliquip excepteur adipisicing excepteur. Pariatur fugiat laborum id sint tempor laboris dolor. 
            </p>
            <a className="text-blue font-weight-700 flex justify-content-center">
              Learn more about publishing 
              <BsArrowRightShort className="h4 mr-3 align-self-center mb-0 text-blue"/>
            </a>
          </Col>
          <Col lg="6" className="d-lg-block d-none">
            <img className="m-4 w-75" src={require("../assets/img/landingpage/smartphone.png")} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
