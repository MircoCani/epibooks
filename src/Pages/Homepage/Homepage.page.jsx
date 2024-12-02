import React from "react";
import AllTheBooks from "../../components/AllTheBooks/AllTheBooks.component";
import Welcome from "../../components/Welcome/Welcome.component";

const Homepage = () => {
  return (
    <>
      <Welcome />
      <AllTheBooks />
    </>
  );
};

export default Homepage;