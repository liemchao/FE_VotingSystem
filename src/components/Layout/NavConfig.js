// ----------------------------------------------------------------------

import Iconify from "assets/theme/components/icon/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Người dùng",
    path: "/dashboard/user",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Title",
    icon: getIcon("tabler:building-warehouse"),
    children: [
      {
        title: "SubTitle 1",
        path: "",
        icon: getIcon("eva:shopping-bag-fill"),
      },
      {
        title: "SubTitle 2",
        path: "",
        icon: getIcon("ep:food"),
      },
    ],
  },
  {
    title: "Title 2",
    path: "",
    icon: getIcon("eva:people-fill"),
    // s
  },
  {
    title: "Title 3",
    path: "",
    icon: getIcon("carbon:location-company"),
  },
  {
    title: "Title 4",
    path: "",
    icon: getIcon("carbon:delivery"),
  },
  {
    title: "Title 4",
    path: "",
    icon: getIcon("ant-design:schedule-outlined"),
  },
  {
    title: "Title 5",
    path: "",
    icon: getIcon("icon-park-outline:transaction-order"),
  },

  {
    title: "Title 6",
    path: "",
    icon: getIcon("fa6-solid:kitchen-set"),
  },
  ,
];

export default navConfig;
