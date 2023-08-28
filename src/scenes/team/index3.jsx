import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      flex:1,
    },
    {
      field: "rate",
      headerName: "Rate",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "balance",
      headerName: "Balance",
    },
    {
      field: "deposit",
      headerName: "Deposit",
    },
    
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            display="flex"
            alignItems="center"
            sx={{
              "& > *": {
                // Style for direct children of the Box
                margin: 1,
              },
            }}
          >
            <Box
              width="100px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              

              backgroundColor={
                access === "Active"
                  ? colors.greenAccent[600]
                  : undefined
              }
              borderRadius="10px"
            >
              
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>

            <Box
              width="35px"
              height="35px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: colors.blueAccent[600], // Initial background color
                transition: "background-color 0.3s", // Smooth transition effect
                "&:hover": {
                  backgroundColor: colors.blueAccent[700], // Background color on hover
                },
              }}
              borderRadius="50%"
            >
              <EditIcon />
            </Box>


            <Box
              width="35px"
              height="35px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: colors.redAccent[600], // Initial background color
                transition: "background-color 0.3s", // Smooth transition effect
                "&:hover": {
                  backgroundColor: colors.redAccent[700], // Background color on hover
                },
              }}
              borderRadius="50%"
            >
              <DeleteIcon />
            </Box>


          </Box>
        );
      },
    },
    {
      field: "setting",
      headerName: <SettingsIcon/>,
      renderCell: ()=>{
        return(
          <MoreHorizIcon/>
        )
      }
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#000000",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#000000",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#000000",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
