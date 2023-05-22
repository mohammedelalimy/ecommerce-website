import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about-us.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <strong>E-Commerce!</strong> We are a team of students from Tanta University's Faculty of Computer Engineering,
            and we are proud to have built this e-commerce website as part of our coursework.
            Our goal is to provide a user-friendly and secure platform for buying and selling goods online.
            We believe that technology has the power to transform the way we do business,
            and we are excited to be part of this digital revolution.
            We are committed to providing our customers with a seamless shopping experience,
            and we are always looking for ways to improve our website and better serve our customers.
            Thank you for choosing E-Commerce!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;