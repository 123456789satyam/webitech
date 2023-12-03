import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  const img = `https://media.istockphoto.com/id/1481080479/photo/customer-review-satisfaction-feedback-survey-concept-business-people-rate-service-experience.jpg?s=612x612&w=0&k=20&c=zFk7PtRjrloMkNjzSKVZsd8h8WsKIVYT9t0EaBx9Y9k=`;
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={img}
        visit="service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
