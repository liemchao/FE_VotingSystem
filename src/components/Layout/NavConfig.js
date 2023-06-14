// ----------------------------------------------------------------------

import Iconify from "assets/theme/components/icon/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Chiến dịch",
    path: "/dashboard/account",
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
        path: "/dashboard/account",
        icon: getIcon("eva:cube-fill"),
      },
      {
        title: "",
        path: "",
        icon: getIcon("ep:foo d"),
      },
    ],
  },

  // {
  //   title: "Title 3",
  //   path: "",
  //   icon: getIcon("carbon:location-company"),
  // },

  // {
  //   title: "Title 9",
  //   path: "",
  //   icon: getIcon("ant-design:schedule-outlined"),
  // },
  // {
  //   title: "Title 5",
  //   path: "",
  //   icon: getIcon("icon-park-outline:transaction-order"),
  // },

  // {
  //   title: "Title 6",
  //   path: "",
  //   icon: getIcon("fa6-solid:kitchen-set"),
  // },

  ,
];

const navConfigUser = [
  {
    title: "Chiến dịch",
    path: "/user/campaign",
    icon: getIcon("eva:pie-chart-2-fill"),
    children: [
      {
        title: "Tất cả chiến dịch",
        path: "/user/campaign",
        icon: getIcon("eva:cube-outline"),
      },
      {
        title: "Chiến dịch của bản thân",
        path: "/user/campaignowner",
        icon: getIcon("eva:cube-fill"),
      },
    ],
  },

  //   title: "Form",
  //   icon: getIcon("tabler:building-warehouse"),
  //   children: [
  //     {
  //       title: "SubTitle 1",
  //       path: "/dashboard/account",
  //       icon: getIcon("eva:shopping-bag-fill"),
  //     },
  //     {
  //       title: "SubTitle 2",
  //       path: "",
  //       icon: getIcon("ep:foo d"),
  //     },
  //   ],
  // },

  // {
  //   title: "Form",
  //   icon: getIcon("tabler:building-warehouse"),
  //   children: [
  //     {
  //       title: "SubTitle 1",
  //       path: "/dashboard/account",
  //       icon: getIcon("eva:shopping-bag-fill"),
  //     },
  //     {
  //       title: "SubTitle 2",
  //       path: "",
  //       icon: getIcon("ep:foo d"),
  //     },
  //   ],
  // },
  {
    title: "Biểu Mẫu",
    path: "/user/form",
    icon: getIcon("tabler:building-warehouse"),
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
  // {
  //   title: "Title 3",
  //   path: "",
  //   icon: getIcon("carbon:location-company"),
  // },
  // {
  //   title: "Title 4",
  //   path: "",
  //   icon: getIcon("carbon:delivery"),
  // },
  ,
];
const exportedObject = {
  navConfig,
  navConfigUser,
};
export default exportedObject;
