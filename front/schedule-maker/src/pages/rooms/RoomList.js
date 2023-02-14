// import * as React from "react";
import { useEffect, useState, React } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Container } from "@mui/system";
import { SelectChangeEvent } from "@mui/material/Select";

export function RoomList() {
  const [classrooms, setClassrooms] = useState([]);
  const [building, setBuilding] = useState("All");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [classroomsPerPage, setClassroomsPerPage] = useState(10);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isChecked, setChecked] = useState(false);

  const fetchClassrooms = () => {
    fetch("/api/v1/classrooms")
      .then((responce) => responce.json())
      .then((jsonResponce) => setClassrooms(jsonResponce));
  };

  const enableClassroom = (event, classroom) => {
    console.log(classroom)
    fetch(`/api/v1/classrooms/enable/${classroom.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(fetchClassrooms);
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const filteredClassrooms = classrooms.filter((classroom) => {
    if (building === "All") {
      return String(classroom.classroomName)
        .toLowerCase()
        .includes(filter.toLowerCase()) 
        && classroom.active === true;
    } else {
      return (
        String(classroom.classroomName)
          .toLowerCase()
          .includes(filter.toLowerCase()) && classroom.building === building 
          && classroom.active === true
      );
    }
  });

const filteredDisabledClassrooms = classrooms.filter((classroom) => {
    if (building === "All") {
      return String(classroom.classroomName)
        .toLowerCase()
        .includes(filter.toLowerCase()) 
        && classroom.active === false;
    } else {
      return (
        String(classroom.classroomName)
          .toLowerCase()
          .includes(filter.toLowerCase()) && classroom.building === building 
          && classroom.active === false
      );
    }
  });
  

  const indexOfLastClassroom = currentPage * classroomsPerPage;
  const indexOfFirstClassroom = indexOfLastClassroom - classroomsPerPage;
  const currentClassrooms = filteredClassrooms.slice(
    indexOfFirstClassroom,
    indexOfLastClassroom
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredClassrooms.length / classroomsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setBuilding(event.target.value);
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClassroomsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container rowSpacing={3}>
          <Grid item lg={10}>
            <h3>Klasių sąrašas</h3>
          </Grid>
          <Grid item lg={2}>
            <Link to="/create">
              <Button variant="contained">Sukurti naują</Button>
            </Link>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                variant="outlined"
                name="search-form"
                label="Paieška"
                id="search-form"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="building-label">Pastatas</InputLabel>
                <Select
                  labelId="building-label"
                  id="building"
                  label="Pastatas"
                  value={building}
                  onChange={handleChange}
                >
                  {/* Kaip cia ideti verte, kad vel rodytu viska??? TODO */}
                  <MenuItem value="AKADEMIJA, TECHIN">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="AKADEMIJA">AKADEMIJA</MenuItem>
                  <MenuItem value="TECHIN">TECHIN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Klasės pavadinimas</TableCell>
                <TableCell>Pastatas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClassrooms
                .slice(
                  (currentPage - 1) * classroomsPerPage,
                  currentPage * classroomsPerPage
                )
                .map((classroom) => (
                  <TableRow key={classroom.id}>
                    <TableCell component="th" scope="row">
                      <Link to={`/classrooms/view/${classroom.id}`}>
                        {classroom.classroomName}
                      </Link>
                    </TableCell>
                    <TableCell>{classroom.building}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  labelRowsPerPage="Rodyti po"
                  rowsPerPageOptions={[10, 20, { label: "Visi", value: -1 }]}
                  count={filteredClassrooms.length}
                  page={currentPage - 1}
                  rowsPerPage={classroomsPerPage}
                  onPageChange={(_, page) => setCurrentPage(page + 1)}
                  onRowsPerPageChange={(e) =>
                    setClassroomsPerPage(parseInt(e.target.value))
                  }
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <div>
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked ? setChecked(true) : setChecked(false)
            }
          />
          <label>Ištrintos klasės</label>
        </div>
        {isChecked &&
        <TableContainer component={Paper}>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow> 
                <TableCell>Klasės pavadinimas</TableCell>
                <TableCell>Pastatas</TableCell>
                <TableCell>Altyvinti</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDisabledClassrooms
                .slice(
                  (currentPage - 1) * classroomsPerPage,
                  currentPage * classroomsPerPage
                )
                .map((classroom) => (
                  <TableRow key={classroom.id}>
                    <TableCell component="th" scope="row">
                      <Link to={`/classrooms/view/${classroom.id}`}>
                        {classroom.classroomName}
                      </Link>
                    </TableCell>
                    <TableCell>{classroom.building}</TableCell>
                    <TableCell>
                    <Button variant="contained"
                        data-value='true'
                        value={classroom}
                        onClick={(e) => {enableClassroom(e, classroom);}}
                    >Aktyvinti
                    </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  labelRowsPerPage="Rodyti po"
                  rowsPerPageOptions={[1, 20, { label: "Visi", value: -1 }]}
                  count={filteredClassrooms.length}
                  page={currentPage - 1}
                  rowsPerPage={classroomsPerPage}
                  onPageChange={(_, page) => setCurrentPage(page + 1)}
                  onRowsPerPageChange={(e) =>
                    setClassroomsPerPage(parseInt(e.target.value))
                  }
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        }
      </Container>
    </div>
  );
}
