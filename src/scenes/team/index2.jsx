import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
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
      headerAlign: "left",
      align: "left",
    },
    {
      field: "rate",
      headerName: "Rate",
      flex: 1,
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
    },
    {
      field: "deposit",
      headerName: "Deposit",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { active } }) => {
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
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                active === "Active" ? colors.greenAccent[600] : undefined
              }
              borderRadius="10px"
            >
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {active}
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
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
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
