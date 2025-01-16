import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ViewmodelDashboard from "../viewmodel/dashboard.viewmodel";
import SimpleBarChart from "../component/SimpleBarChart";
import React from "react";
import PrimaryButton from "../component/PrimaryButton";
import ItemInputText from "../component/ItemInputText";

export default function DashboardScreen() {
    const viewmodalDashBoard = ViewmodelDashboard();

    return (
        <Box sx={{
            flex: 1,
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '100%', gap: 1 }}>
                <ItemInputText
                    label="Nhập năm"
                    value={viewmodalDashBoard.year}
                    setvalue={viewmodalDashBoard.setYear}
                    textError={viewmodalDashBoard.errorYear}
                    styteContainer={{ maxWidth: '200px' }}
                    type="number"
                />
                <PrimaryButton
                    label="Tìm kiếm"
                    onClick={() => {
                        viewmodalDashBoard.getOrderDataForDashboard();
                    }}
                    styleButton={{ width: 'auto', height: '40px' }}
                />
            </Box>
            <SimpleBarChart data={viewmodalDashBoard.dataDate} />
        </Box>
    )
}