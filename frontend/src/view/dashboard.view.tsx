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
                <div>
                    <input
                        placeholder="Nhập năm"
                        type="number"
                        value={viewmodalDashBoard.year}
                        onChange={(e) => {
                            if (e.target.value.length <= 4) {
                                viewmodalDashBoard.setYear(e.target.value);
                            }
                        }}
                        style={{ padding: 10, borderRadius: 5, borderWidth: 2, borderColor: 'white' }} />
                    {viewmodalDashBoard.year.length < 1 ?
                        <p style={{fontSize: 12, margin: 0, padding: 0}}>Không để trống ô nhập</p>
                        :
                        <></>
                    }
                </div>

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