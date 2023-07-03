import { Dialog, DialogContent, DialogTitle, Paper } from "@mui/material";
import Iconify from "assets/theme/components/icon/Iconify";
import PageHeader from "components/Layout/PageHeader";
import { Authen } from "context/authenToken/AuthenToken";
import { getFormId } from "context/redux/action/action";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
export default function ViewForm(props) {
  const { view, setView, formId } = props;
  console.log(formId);
  const { token } = useContext(Authen);
  const dispath = useDispatch();
  useEffect(() => {
    const callAPI = async () => {
      dispath(getFormId(token, formId));
    };
    callAPI();
  }, [dispath, formId]);

  const formByid = useSelector((state) => {
    return state.formByid;
  });
  console.log(formByid);
  const handleClose = () => {
    setView(false);
  };
  return (
    <Paper>
      <Dialog maxWidth="md" open={view} onClose={handleClose}>
        <DialogTitle>
          <PageHeader
            title="Xem form"
            subTitle="Tạo chiến dịch cho riêng bạn"
            icon={getIcon("gala:add")}
          />
        </DialogTitle>
        <DialogContent>
          {formByid.categoryId} {formByid.name}
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
