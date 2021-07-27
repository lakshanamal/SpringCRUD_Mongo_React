import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Button } from "@material-ui/core";
import Edit from "./Edit";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function UserTable() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const allUsers = async () => {
    axios.get("http://localhost:8080/api/user").then((response) => {
      setUsers(response);
      console.log(response);
    });
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <Edit />
                <Button
                  style={{ marginLeft: 20 }}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  // startIcon={}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
