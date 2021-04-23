import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Home from "../components/content/Home";

type Page =
    | {
          page: "bet-result";
          slug?: "type";
      }
    | {
          page: "about";
          slug: "howto" | "rule";
      };

interface Props {
    params: Page;
}

const Pages = ({ params }: Props) => {
    if (params.page === "bet-result") {
        if (params.slug === "type") return <h1>BetResultType</h1>;
    }

    if (params.page === "about") {
        if (params.slug === "howto") return <Home />;
        if (params.slug === "rule") return <h1>rult</h1>;
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
        { page: "about", slug: "rule" },
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
