// ----------------------------------------------------------------------

import Iconify from "assets/theme/components/icon/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Chiến dịch",
    path: "/admin/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
    // s
  },
  {
    title: "Form",
    path: "/dashboard/user",
    icon: getIcon("eva:settings-2-fill"),
  },
  {
    title: "Kết quả",
    icon: getIcon("tabler:building-warehouse"),
    children: [
      {
        title: "History",
        subPath: "/dashboard/account",
        icon: getIcon("eva:cube-fill"),
      },
      {
        title: "",
        path: "",
        icon: getIcon("ep:foo d"),
      },
    ],
  },
];

const navConfigUser = [
  {
    title: "Chiến dịch nè",
    icon: getIcon("eva:pie-chart-2-fill"),
    children: [
      {
        title: "Tất cả chiến dịch",
        icon: getIcon("eva:cube-outline"),
        subItems: [
          {
            title: "Chiến dịch mùa hè",
            subPath: "/user/text/hihi",
            icon: getIcon("eva:cube-outline"),
          },
          {
            title: "Chiến dịch mùa xuân",
            subPath: "/user/text/hhehe",
            icon: getIcon("eva:cube-outline"),
          },
        ],
      },
      {
        title: "Chiến dịch của bản thân",
        path: "/user/campaign",
        icon: getIcon("eva:cube-fill"),
      },
    ],
  },
  {
    title: "Biểu mẫu",
    path: "/user/form",
    icon: getIcon("eva:file-text-fill"),
    // s
  },

  {
    title: "Bản mẫu",
    path: "/user/template",
    icon: getIcon("eva:file-text-fill"),
    // s
  },
  {
    title: "Đánh Giá",
    path: "/user/feedback",
    icon: getIcon("eva:flag-fill"),
    // s
  },
  {
    title: "Ứng cử viên",
    path: "/user/candidate",
    icon: getIcon("eva:person-done-fill"),
    // s
  },
  ,
];
const exportedObject = {
  navConfig,
  navConfigUser,
};
export default exportedObject;
