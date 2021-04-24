import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import BetResult from "../components/content/BetResult";

type Page =
    | {
          page: "bet-result";
      }
    | {
          page: "balance";
      }
    | {
          page: "reward";
      }
    | {
          page: "account";
      }
    | {
          page: "logout";
      };

interface Props {
    params: Page;
}

const index = ({ params }: Props) => {
    if (params.page === "bet-result") return <BetResult />;
    if (params.page === "balance") return <h1>balance</h1>;
    if (params.page === "reward") return <h1>reward</h1>;
    if (params.page === "account") return <h1>account</h1>;
    if (params.page === "logout") return <h1>logout</h1>;
};

export default index;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: { params },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pages: Props["params"][] = [
        { page: "bet-result" },
        { page: "balance" },
        { page: "reward" },
        { page: "account" },
        { page: "logout" },
    ];

    return {
        paths: pages.map((pages) => {
            return {
                params: {
                    page: pages.page,
                },
            };
        }),
        fallback: false,
    };
};
