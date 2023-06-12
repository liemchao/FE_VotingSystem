import { filter } from "lodash";
import { useState } from "react";
import * as React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import jwt_decode from "jwt-decode";

import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import UserListHead from "layouts/sections/UserListHead";
import Foodlistoolbar from "layouts/sections/Foodlistoolbar";
import Page from "components/Layout/Page";
import Label from "components/label/Label";
import Scrollbar from "components/Layout/Scrollbar";
import SearchNotFound from "components/Layout/SearchNotFound";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "images", name: "Hình", alignRight: false },
  { id: "name", label: "Họ và tên", alignRight: false },
  { id: "Majo", label: "Ngành", alignRight: false },
  { id: "Khoá", label: "Khoá", alignRight: false },
  { id: "createdAt", label: "Ngày thêm", alignRight: false },
  { id: "updatedate", label: "Ngày sửa", alignRight: false },
  { id: "status", label: "Trạng thái", alignRight: false },
  { id: "description", label: "Mô tả", alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis?.map((el) => el[0]);
}
//getICon

export default function UserList() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const handleClickOpen = React.useCallback((item) => {
    setOpen(true);
    setValue(item);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const location = useLocation();

  const getOptions = () => [
    { id: "active", title: "Đang bán" },
    { id: "inActive", title: "Ngưng bán" },
    { id: "All", title: "Tất cả" },
  ];

  const handleDelete = async (id) => {};

  //useSelector kéo data từ store(userReducer.js) zìa mà xài
  const food = useSelector((state) => {
    return state.userReducer.listFood;
  });

  //========================================================
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = food.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filterFood = applySortFilter(food, getComparator(order, orderBy), filterName);

  const handleDate = (time) => {
    const a = new Date(time).toLocaleDateString().split("/");
    if (a[0] < 10) {
      return `${a[2]}-${a[1]}-0${a[0]}`;
    } else return `${a[2]}-${a[1]}-${a[0]}`;
  };

  const isUserNotFound = filterFood?.length === 0;
  return (
    <Page title="Admin">
      <Container maxWidth={false}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {/* <Icon icon="emojione-monotone:pot-of-food" fontSize={100} /> */}
          </Typography>
          <ButtonCustomize
            variant="contained"
            component={RouterLink}
            to="/dashboard/admin/newfood"
            nameButton=" Tạo Biểu Mẫu"
          />
        </Stack>

        <Card>
          <Foodlistoolbar
            numSelected={selected?.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            options={getOptions()}
          />
          <Scrollbar>
            <TableContainer>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={food?.length}
                  numSelected={selected?.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {/* nhớ khởi tạo đúng tên file trong database */}
                  {filterFood
                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        name,
                        price,
                        description,
                        createdAt,
                        updatedAt,
                        status,
                        foodCategory,
                        image,
                      } = row;

                      const isItemSelected = selected.indexOf(name) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell>
                            <Avatar alt={name} src={image} />
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" noWrap>
                              {/* {name} */}
                              Phạm Mạnh Toàn
                            </Typography>
                          </TableCell>

                          <TableCell align="left">
                            {/* {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(price)} */}
                            Kĩ thuật phần mềm
                          </TableCell>
                          <TableCell align="left">{foodCategory.name} K14</TableCell>
                          <TableCell align="left">
                            {/* {new Date(createdAt).toLocaleDateString()} */}
                            11/02/2023
                          </TableCell>
                          <TableCell align="left">
                            {/* {new Date(updatedAt).toLocaleDateString()} */}
                            11/02/2023
                          </TableCell>
                          <TableCell align="left">
                            <div>
                              {status === "inActive" && (
                                // <Alert severity="warning">inActive</Alert>
                                <Label color="error">Ngưng hoạt động</Label>
                              )}
                              {status === "active" && <Label color="success">hoạt động</Label>}
                            </div>
                          </TableCell>
                          <TableCell align="left">{description}</TableCell>
                          <TableCell align="left">
                            <ButtonCustomize
                              variant="outlined"
                              width="6rem"
                              onClick={() => handleClickOpen(row)}
                              nameButton={status === "active" ? "Ngưng bán" : "Bán"}
                            />
                          </TableCell>
                          <TableCell align="left">
                            <ButtonCustomize
                              nameButton="Chi tiết"
                              component={RouterLink}
                              to={`${location.pathname}/${id}`}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={food?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            // fix languge in footer tables
            labelRowsPerPage={"Số hàng trên một trang"}
            labelDisplayedRows={({ from, to, count }) => {
              return "" + from + "-" + to + " của " + count;
            }}
          />
        </Card>
      </Container>
    </Page>
  );
}
