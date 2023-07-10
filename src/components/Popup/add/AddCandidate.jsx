import { Avatar, Dialog, DialogContent, DialogTitle, Grid, Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PageHeader from "components/Layout/PageHeader";
import Iconify from "assets/theme/components/icon/Iconify";
import { Authen } from "context/authenToken/AuthenToken";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "context/redux/action/action";
import { CustomizedToast } from "components/toast/ToastCustom";
import API from "config/axios/API/API";
import { URL_API } from "config/axios/Url/URL";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AddCandidate(props) {
  const { OpenPopUp, SetOpenPopUp, id } = props;
  const [searchInput, setSearchInput] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [tableData, setTableData] = useState([]);
  const dispacth = useDispatch();

  const { decode, token } = useContext(Authen);
  const handleClose = () => {
    SetOpenPopUp(false);
  };

  useEffect(() => {
    const callAPI = async () => {
      await dispacth(getAllUser(token));
    };
    callAPI();
  }, [dispacth, token]);

  const users = useSelector((state) => {
    return state.useToAddCandidate;
  });

  const handleSearchInputChange = (event, value) => {
    const input = event.target.value;
    setSearchInput(input);
    if (input === "") {
      setTableData([]);
      return;
    }
    if (users) {
      const filteredUsers = users.filter(
        (user) => user.fullName && user.fullName.toLowerCase().includes(input.toLowerCase())
      );
      setTableData(filteredUsers);
    }
    console.log(tableData);
    handleItemSelected(null, value);
  };

  const handleItemSelected = (event, value) => {
    if (value) {
      setSelectedItems([...selectedItems, value]);
      setSearchInput("");
    } else {
      setSearchInput("");
    }
    setTableData([]);
  };

  const handleRemoveItem = (userName) => {
    const index = selectedItems.findIndex((item) => item.userName === userName);
    if (index > -1) {
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    }
  };

  const handleSave = async () => {
    const listUser = selectedItems.map((item) => {
      return {
        description: item.address,
        userId: item.userName,
      };
    });
    const data = {
      campaignId: id,
      listUser: listUser,
    };
    try {
      const res = await API("POST", URL_API + "/api/v1/candidates", data, token);
      CustomizedToast({
        message: "Đã tạo thành công",
        type: "SUCCESS",
      });
    } catch (error) {
      console.log("🚀 ~ file: NewStage.jsx:85 ~ onSubmit: ~ error:", error);
      CustomizedToast({
        message: "Tạo không thành công",
        type: "ERROR",
      });
    }
  };

  return (
    <Paper>
      <Dialog maxWidth="md" open={OpenPopUp} onClose={handleClose}>
        <DialogTitle>
          <PageHeader
            title="Thêm người"
            subTitle="Thêm ứng cử viên"
            icon={getIcon("ph:question-bold")}
          />
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Autocomplete
                options={users}
                getOptionLabel={(option) => `${option.fullName} (${option.userName})`}
                value={null}
                width="120px"
                onChange={(event, value) => handleItemSelected(event, value)}
                filterOptions={(options, state) =>
                  options.filter(
                    (option) =>
                      option.fullName.toLowerCase().includes(state.inputValue.toLowerCase()) ||
                      option.userName.toLowerCase().includes(state.inputValue.toLowerCase())
                  )
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for a user"
                    variant="outlined"
                    onChange={(event) => handleSearchInputChange(event, null)}
                    value={searchInput}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" onClick={() => handleItemSelected(null, null)}>
                Add
              </Button>
            </Grid>
          </Grid>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Avatar alt={name} src={selectedItems.avatarUrl} />
                    </TableCell>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.userName}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => handleRemoveItem(item.userName)}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ButtonCustomize
            bgColor="#71C043"
            hovercolor="#2BB557"
            nameButton="Lưu"
            onClick={() => handleSave()}
          />
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
