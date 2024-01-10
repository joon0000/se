import React, { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { EmployeeInterface } from "../../models/IEmployee";
import { ButtonGroup, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import moment from "moment";
import DeleteIcon from '@mui/icons-material/Delete';

const themeshow = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: grey[800],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#e8f5e9",
    },
  }
});


function Manage_Show() {

  const [employee, setEmployee] = React.useState<EmployeeInterface[]>([]);
  const id_officer = localStorage.getItem("id");


 const getEmployee = async () => {
   const apiUrl = `http://localhost:8080/Employees/officer/${id_officer}`;
   const requestOptions = {
     method: "GET",
     headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
   };


   fetch(apiUrl, requestOptions)
     .then((response) => response.json())
     .then((res) => {
       console.log(res.data);
       if (res.data) {
        setEmployee(res.data);
       }
     });
 };



 const deleteEmployee = (id : number) => {
  
  const apiUrl = "http://localhost:8080/Employees/"+id;
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    

  };

  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then(async (res) => {
      if (res.data) {
        //setSuccess(true);
        //await timeout(1000); //for 1 sec delay 
        window.location.reload();

      } else {
        //setError(true);
      }
    });
}


 useEffect(() => {
   getEmployee();
 }, []);

 return (
<ThemeProvider theme={themeshow}>
  <div>
  <Container maxWidth="xl">
  <Box
        display="flex"
        sx={{
          marginTop: 2,
        }}
      >
        <Box flexGrow={1}>
          <Typography
            component="h2"
            variant="h6"
            color="primary"
            gutterBottom
          >
            Employee data table
          </Typography>
        </Box>

        <Box>

          <Button 
            component={RouterLink}
            to="/Manage-Save"
            variant="contained"
            color="primary"
          >
            <Typography
              color="secondary"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Record Employee Information

            </Typography>
          </Button>
        </Box>
      </Box>
        <div>
          <Container maxWidth="xl">
            <div style={{ height: 500, width: "100%", marginTop: "50px" }}>
              <TableContainer >
                <Table aria-label="simple table">
                  <TableHead>
                    {/* หัวข้อตาราง */}
                    <TableRow>
                      <TableCell align="center" width="20%"> Personal ID </TableCell>
                      <TableCell align="center" width="20%"> Name </TableCell>
                      <TableCell align="center" width="20%"> Department </TableCell>
                      <TableCell align="center" width="20%"> Position </TableCell>
                      <TableCell align="center" width="20%"> Username </TableCell>
                      <TableCell align="center" width="20%"> Email </TableCell>
                      <TableCell align="center" width="20%"> Tel </TableCell>
                      <TableCell align="center" width="20%"> Salary </TableCell>
                      <TableCell align="center" width="20%"> Gender </TableCell>
                      <TableCell align="center" width="20%"> Address </TableCell>
                      <TableCell align="center" width="20%"> Date of Birth </TableCell>
                      <TableCell align="center" width="20%"> Year of Start </TableCell>
                      <TableCell align="center" width="20%"> Officer </TableCell>

                    </TableRow>
                  </TableHead>

                  <TableBody style={{ marginLeft: "100px" }}>
                    {employee.map((item: EmployeeInterface) => (
                     
                     <TableRow key={item.ID} >
                        <TableCell align="center">{item.PersonalID}</TableCell>
                        <TableCell align="center">{item.Employeename}</TableCell>
                        <TableCell align="center">{item.Department?.Name}</TableCell>
                        <TableCell align="center">{item.Position?.Name}</TableCell>
                        <TableCell align="center">{item.Eusername}</TableCell>
                        <TableCell align="center">{item.Email}</TableCell>
                        <TableCell align="center">{item.Phonenumber}</TableCell>
                        <TableCell align="center">{item.Salary}</TableCell>
                        <TableCell align="center">{item.Gender}</TableCell>
                        <TableCell align="center">{item.Address}</TableCell>
                        <TableCell align="center">{moment(item.DateOfBirth).format("DD/MM/YYYY")}</TableCell>
                        <TableCell align="center">{moment(item.YearOfStart).format("DD/MM/YYYY")}</TableCell>
                        <TableCell align="center">{item.Officer?.Officername}</TableCell>
                        <TableCell align="center">
                            <IconButton aria-label="delete">
                              <DeleteIcon onClick={() => deleteEmployee(Number(item.ID))} />
                            </IconButton>           
                        </TableCell>
                        <TableCell align="center">
                          <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button
                              color="warning"
                              component={RouterLink}
                              to={`/Manage-Edit/${item.ID}`}
                              >
                              Edit</Button>
                          </ButtonGroup>      
                        </TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Container>
        </div>
  </Container>
 </div>
</ThemeProvider>
 );

}


export default Manage_Show;