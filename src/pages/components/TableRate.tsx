import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React from "react";

interface Data {
    id: string;
    letter: string;
    rate: number;
    discount: number;
    minimum: number;
    maximum: number;
}

const createData = ({ id, letter, rate, discount, minimum, maximum }: Data) => {
    return { id, letter, rate, discount, minimum, maximum };
};

const rows = [
    createData({
        id: "1",
        letter: "3 ตัวบน",
        rate: 800,
        discount: 0,
        minimum: 5,
        maximum: 100000,
    }),
    createData({
        id: "2",
        letter: "3 ตัวโต๊ด",
        rate: 125,
        discount: 0,
        minimum: 5,
        maximum: 100000,
    }),
    createData({
        id: "3",
        letter: "2 ตัวบน",
        rate: 95,
        discount: 0,
        minimum: 5,
        maximum: 100000,
    }),
    createData({
        id: "4",
        letter: "2 ตัวล่าง",
        rate: 95,
        discount: 0,
        minimum: 5,
        maximum: 100000,
    }),
    createData({
        id: "5",
        letter: "วิ่งบน",
        rate: 3,
        discount: 0,
        minimum: 5,
        maximum: 100000,
    }),
    createData({
        id: "6",
        letter: "วิ่งล่าง",
        rate: 4,
        discount: 0,
        minimum: 5,
        maximum: 100000,
    }),
];

const TableRate = () => {
    return (
        <TableContainer
            component={Paper}
            variant="elevation"
            elevation={0}
            square={true}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="none" align="center">
                            หวยลาว STAR VIP
                            <br />
                            [อัตราจ่าย]
                        </TableCell>
                        <TableCell padding="none" align="center">
                            จ่าย
                            <br />
                            [บาท]
                        </TableCell>
                        <TableCell padding="none" align="center">
                            ส่วนลด
                            <br />
                            [%]
                        </TableCell>
                        <TableCell padding="none" align="center">
                            แทงขั้นต่ำ
                            <br />
                            [บาท]
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell
                                padding="none"
                                align="left"
                                component="th"
                                scope="row"
                            >
                                {row.letter}
                            </TableCell>
                            <TableCell padding="none" align="center">
                                {row.rate.toFixed(2)}
                            </TableCell>
                            <TableCell padding="none" align="center">
                                {row.discount.toFixed(2)}
                            </TableCell>
                            <TableCell
                                padding="none"
                                align="center"
                            >{`${row.minimum.toLocaleString()}-${row.maximum.toLocaleString()}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableRate;
