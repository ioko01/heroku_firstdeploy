import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import BetResult from "./components/content/BetResult";
import Signin from "./components/Signin";

type Params = "signin" | "bet-result";

interface Props {
    params: Params;
}

const Pages = ({ params }: Props) => {
    if (params === "signin") return <Signin />;
    if (params === "bet-result") return <BetResult />;
};

export default Pages;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: { params: params.pages },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const page: Props["params"][] = ["signin", "bet-result"];

    const paths = page.map((page) => {
        return {
            params: { pages: page },
        };
    });
    return {
        paths,
        fallback: false,
    };
};
