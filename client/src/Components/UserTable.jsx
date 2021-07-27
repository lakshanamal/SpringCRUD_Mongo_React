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
      setUsers(response.data);
      console.log(response.data);
    });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/api/user/${id}`).then((res) => {
      alert("Delete succussful");
      window.location.href = "/";
    });
  };

  useEffect(() => {
    allUsers();
  }, [setUsers]);

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
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">
                <Edit idName={row.id} />
                {console.log(row.id)}
                <Button
                  style={{ marginLeft: 20 }}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  // startIcon={}
                  onClick={() => deleteUser(row.id)}
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
