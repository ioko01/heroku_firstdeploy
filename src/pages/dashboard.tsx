import { useRouter } from "next/router";
import React from "react";
import Home from "./components/content/Home";
import BetResult from "./components/content/BetResult";

interface Props {}

const Dashboard = (props: Props) => {
    return <Home />;
};

export default Dashboard;
