import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import BetResult from "../components/content/BetResult";
import Home from "../components/content/Home";

type Page =
    | {
          page: "bet-result";
          slug: "type";
      }
    | {
          page: "about";
          slug: "howto";
      };

interface Props {
    params: Page;
}

const Pages = ({ params }: Props) => {
    if (params.page === "bet-result") {
        if (params.slug === "type") return <BetResult />;
    }

    if (params.page === "about") {
        if (params.slug === "howto") return <Home />;
    }
};

export default Pages;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: { params },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pages: Props["params"][] = [
        { page: "bet-result", slug: "type" },
        { page: "about", slug: "howto" },
    ];

    return {
        paths: pages.map((pages) => {
            return {
                params: {
                    page: pages.page,
                    slug: pages.slug,
                },
            };
        }),
        fallback: false,
    };
};
