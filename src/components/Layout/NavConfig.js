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
    title: "Chiến dịch",
    icon: getIcon("eva:pie-chart-2-fill"),
    children: [
      {
        title: "Quản lý chiến dịch",
        icon: getIcon("eva:settings-2-outline"),
        subItems: [
          {
            title: "Tất cả chiến dịch",
            subPath: "/user/allcampign",
            icon: getIcon("eva:cube-outline"),
          },
          {
            title: "Chiến dịch của bản thân",
            path: "/user/campaign/hihi",
            icon: getIcon("eva:cube-fill"),
          },
        ],
      },
    ],
  },
  {
    title: "Lịch sử hoạt động",
    path: "/user/history",
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
    title: "Vai Trò",
    icon: getIcon("eva:people-fill"),
    children: [
      {
        title: "Ứng cử viên",
        icon: getIcon("eva:person-fill"),
        subItems: [
          {
            title: "Chiến dịch đã tham gia",
            // subPath: "/user/text/hihi",
            icon: getIcon("eva:cube-outline"),
          },
          {
            title: "Hồ sơ bản thân",
            // subPath: "/user/text/hhehe",
            icon: getIcon("eva:cube-outline"),
          },
        ],
      },
      {
        title: "Người điều hành",
        icon: getIcon("eva:person-outline"),
        subItems: [
          {
            title: "Biểu Mẫu",
            // subPath: "/user/text/hihi",
            icon: getIcon("eva:cube-outline"),
          },
          {
            title: "Bản Mẫu",
            // subPath: "/user/text/hhehe",
            icon: getIcon("eva:cube-outline"),
          },
        ],
      },
    ],
  },
];
const exportedObject = {
  navConfig,
  navConfigUser,
};
export default exportedObject;
