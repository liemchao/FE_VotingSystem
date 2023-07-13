// import { filter } from "lodash";

import { useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TextField, Grid, OutlinedInput, InputAdornment, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  OutlinedInput,
  InputAdornment,
  Container,
  TextField,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Iconify from "assets/theme/components/icon/Iconify";
import Box from "@mui/material/Box";
import Select from "components/Control/Select";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetQuestByIdCampaign } from "context/redux/action/action";
import { Authen } from "context/authenToken/AuthenToken";
import QuestionPopUp from "components/Popup/create/QuestionPopUp";
import MultipleInteractionCard from "components/Cards/CardCandidate";
import Page from "components/Layout/Page";
import { handleGetCandidateByIdCampaign } from "context/redux/action/action";
import { callAPIgetListForm } from "context/redux/action/action";
import { debounce } from "lodash";
import { useRef } from "react";
import { debounce } from "lodash";
import { useRef } from "react";

export default function ListCandidate() {
  const [OpenPopUp, SetOpenPopUp] = useState(false);
  // const [idForm, setIdForm] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useContext(Authen);
  const dipatch = useDispatch();
  const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": { width: 320, boxShadow: "0.7 rem" },
    // "& fieldset": {
    //   borderWidth: `1px !important`,
    //   borderColor: `${theme.palette.grey[500_32]} !important`,
    // },
  }));

  useEffect(() => {
    const callAPI = async () => {
      await dispatch(handleGetCandidateByIdCampaign(id, token));
      await dispatch(callAPIgetListForm(token));
    };
    callAPI();
  }, [id]);

  const candidateList = useSelector((state) => {
    return state.candidateList;
  });
  const idForm = useSelector((state) => {
    return state.idForm;
  });

  const hanlleAuthenVote = () => {
    const token = localStorage.getItem("token");
    try {
      const decoded = jwt_decode(token);
      if (token === null) {
        // popups ' ban chua dang nhap cam ==> login
      } else if (token && !decoded.RoleName) {
        // popups 'authention ban khong xin' ==> login
      } else if (roles.includes(decoded.RoleName)) {
        // vote goi api vote o day
      }
    } catch (error) {
      // error sommingthing
    }
  };

  const hanldeGetQuestion = async (token) => {
    await dipatch(handleGetQuestByIdCampaign(idForm, token));
    SetOpenPopUp(true);
  };

  const getOptions = () => [
    { id: "active", title: "Đang hoạt động" },
    { id: "inActive", title: "Trạng thái ẩn" },
    { id: "All", title: "Không hoạt động" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const candidatesPerPage = 6; // number of candidates to be displayed per page

  const filteredCandidates = useSelector((state) =>
    state.candidateList.filter((candidate) =>
      candidate.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // const debouncedFilter = debounce((value) => {
  //   setSearchTerm(value);
  //   setCurrentPage(1); // reset current page to 1 when search term changes
  //   setIsTyping(false);
  // }, 3300);

  // const handleSearchChange = (event) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
  //   setIsTyping(true);
  //   if (!isTyping) {
  //     debouncedFilter(value);
  //   }
  // };

  const searchInputRef = useRef(null);
  const prevSearchValueRef = useRef("");

  const handleSearchChange = () => {
    const currentValue = searchInputRef.current.value;
    if (currentValue !== prevSearchValueRef.current) {
      setSearchTerm(currentValue);
      setCurrentPage(1); // reset current page to 1 when search term changes
      prevSearchValueRef.current = currentValue;
    }
  };

  // calculate the total number of pages
  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // get the current page of candidates based on the current page number
  const getCurrentCandidates = () => {
    const startIndex = (currentPage - 1) * candidatesPerPage;
    const endIndex = startIndex + candidatesPerPage;
    return filteredCandidates.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const searchInput = searchInputRef.current;
    searchInput.addEventListener("input", handleSearchChange);
    return () => {
      searchInput.removeEventListener("input", handleSearchChange);
    };
  }, []);
  return (
    <Page title="User">
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>

          {/* <SearchStyle
            // value={searchTerm}
            inputRef={searchInputRef}
            // onChange={handleSearchChange}
            placeholder="Tìm kiếm..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
            inputProps={{ "aria-label": "search candidate" }}
            // onChange={handleSearchChange}
          /> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              inputProps={{ "aria-label": "search candidate" }}
              id="outlined-basic"
              inputRef={searchInputRef}
              label="Tìm kiếm..."
              variant="outlined"
            />
          </Box>

          <Pagination
            sx={{ ml: 25 }}
            color="primary"
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
          <Box sx={{ marginTop: "1%", marginLeft: "20%" }}>
            <Select
              required
              label="Trạng thái"
              width="13rem"
              height="10rem"
              onChange={(e) => {}}
              options={getOptions()}
            />
          </Box>
        </Box>

        <Grid container spacing={3} mt={3} bottom={2} sx={{ gap: 10 }}>
          {getCurrentCandidates().map((card, index) => (
            <Grid item xs={6} md={3} key={index}>
              <MultipleInteractionCard
                image={card?.avatarUrl}
                name={card?.fullName}
                onClickVote={() => {
                  hanldeGetQuestion(token);
                }}
              />
            </Grid>

          ))}
        </Grid>
      </Container>
      <QuestionPopUp SetOpenPopUp={SetOpenPopUp} OpenPopUp={OpenPopUp} />
    </Page>
  );
}
