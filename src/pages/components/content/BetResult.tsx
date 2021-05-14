import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    makeStyles,
    Radio,
    RadioGroup,
    Typography,
} from "@material-ui/core";
import React from "react";

const BetResult = () => {
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
                    borderBottom={1}
                    padding={1}
                    borderColor="primary.secondary"
                >
                    <p>ตัวเลือกการค้นหา</p>
                </Box>

                <Box padding={1}>
                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            aria-label="position"
                            name="position"
                            defaultValue="top"
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
