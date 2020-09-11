import "../assets/style.css";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import HomeView from "../components/HomeView"

const Home = (props) => {
  const router = useRouter();
  return (
      <HomeView {...props} />
  );
};

Home.getInitialProps = async () => {
  return {};
};

export default Home;
