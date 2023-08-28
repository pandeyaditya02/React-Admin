//Add new graphs with drag and drop working
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/MakeLine";
import React, { useContext } from "react";
import Linecontext from "../../context/LineGraph/linecontext";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { LineGraphs, update, setLineGraphs } = useContext(Linecontext);

  const addLineChart = () => {
    update();
  };

  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _LineGraphs = [...LineGraphs];

    //remove and save the dragged item content
    let draggedItemContent = _LineGraphs.splice(dragItem.current, 1)[0];

    //switch the position
    _LineGraphs.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // update the actual array
    setLineGraphs(_LineGraphs);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            onClick={addLineChart}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Add New Line Graph
          </Button>
        </Box>
      </Box>

      {LineGraphs?.map((data, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => {
            dragItem.current = index;
          }}
          onDragEnter={(e) => {
            dragOverItem.current = index;
          }}
          onDragEnd={handleSort}
          onDragOver={(e)=>{e.preventDefault()}}
        >

          <Box key={index} height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} data={data} />
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default Dashboard;