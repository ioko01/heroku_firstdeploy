import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

const BetResult = () => {
    const [value, setValue] = useState("today");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <Box>
            <Typography variant="body1" component="p">
                รายการแทง (เรียงตามเวลา)
            </Typography>
            <Box
                display="block"
                border={1}
                borderRadius="3px"
                borderColor="primary.secondary"
            >
                <Box
                    display="block"
                    border={1}
                    borderTop={0}
                    borderLeft={0}
                    borderRight={0}
                    borderColor="primary.secondary"
                    padding={1}
                >
                    <p>ตัวเลือกการค้นหา</p>
                </Box>

                <Box padding={1}>
                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            aria-label="search"
                            name="search"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="today"
                                control={<Radio color="primary" size="small" />}
                                label="วันนี้"
                            />
                            <FormControlLabel
                                value="yesterday"
                                control={<Radio color="primary" size="small" />}
                                label="เมื่อวาน"
                            />
                            <FormControlLabel
                                value="week"
                                control={<Radio color="primary" size="small" />}
                                label="สัปดาห์นี้"
                            />
                            <FormControlLabel
                                value="lastweek"
                                control={<Radio color="primary" size="small" />}
                                label="สัปดาห์ที่แล้ว"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
};

export default BetResult;
