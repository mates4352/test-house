import React, {FC} from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Auth} from "../../../pages/auth";
import {Main} from "../../../pages/main";
import {SigIn} from "../../../sub-pages/sig-in";
import {RegistrationAdmin} from "../../../sub-pages/registration-admin";
import {PhoneCode} from "../../../sub-pages/phone-code";
import {Welcome} from "../../../sub-pages/welcome";
import {Home} from "../../../sub-pages/home";
import {News} from "../../../sub-pages/news";
import {Contacts} from "../../../sub-pages/contacts";
import {Dispatcher} from "../../../sub-pages/dispatcher";
import {PersonalCabinet} from "../../../sub-pages/personal-cabinet";
import {Appeal} from "../../../sub-pages/appeal";
import {RouterAuth} from "../../../../../core/utils/enum/routers/router-auth";
import {RouterMain} from "../../../../../core/utils/enum/routers/router-main";
import {CompanyInfo} from "../../../sub-pages/company-info";
import {NewsInfo} from "../../../sub-pages/news-info";
import {ListOrders} from "../../../sub-pages/list-orders";
import {Order} from "../../../sub-pages/order";
import {PersonalData} from "../../../sub-pages/personal-data";
import {Admin} from "../../../sub-pages/admin";
import {RouterCabinet} from "../../../../../core/utils/enum/routers/router-cabinet";
import {RouterAdmin} from "../../../../../core/utils/enum/routers/router-admin";
import {AdminListOrders} from "../../../sub-pages/admin-list-orders";
import {AdminListModerators} from "../../../sub-pages/admin-list-moderators";
import {AdminListLodgers} from "../../../sub-pages/admin-list-lodgers";
import {AdminListNews} from "../../../sub-pages/admin-list-news";
import {AdminCreateNews} from "../../../sub-pages/admin-create-news";
import {AdminListRouting} from "../../../sub-pages/admin-list-routing";
import {RouterList} from "../../../../../core/utils/enum/routers/router-list";

type WrapperRouterProviderType = {};

export const WrapperRouterProvider: FC<WrapperRouterProviderType> = ({}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={RouterAuth.AUTH}/>
    },

    {
      path: RouterAuth.AUTH,
      element: <Auth/>,
      children: [
        {
          path: RouterAuth.SIG_IN,
          element: <SigIn/>
        },

        {
          path: RouterAuth.PHONE_CODE,
          element: <PhoneCode/>
        },

        {
          path: RouterAuth.REGISTRATION_ADMIN,
          element: <RegistrationAdmin/>
        },

        {
          path: RouterAuth.WELCOME,
          element: <Welcome/>
        },
      ]
    },

    {
      path: RouterMain.MAIN,
      element: <Main/>,
      children: [
        {
          path: RouterMain.HOME,
          element: <Home/>,
        },

        {
          path: RouterMain.NEWS,
          element: <News/>
        },

        {
          path: RouterMain.NEWS_PARAMS,
          element: <NewsInfo/>
        },

        {
          path: RouterMain.APPEAL,
          element: <Appeal/>
        },

        {
          path: RouterMain.CONTACTS,
          element: <Contacts/>,
        },

        {
          path: RouterMain.CONTACTS_PARAMS,
          element: <CompanyInfo/>,
        },

        {
          path: RouterMain.DISPATCHER,
          element: <Dispatcher/>
        },

        {
          path: RouterMain.PERSONAL_CABINET,
          element: <PersonalCabinet/>,
          children: [
            {
              path: RouterCabinet.PERSONAL_CABINET_DATA,
              element: <PersonalData/>
            },

            {
              path: RouterCabinet.PERSONAL_CABINET_LIST_ORDERS,
              element: <ListOrders/>
            }
          ]
        },

        {
          path: RouterMain.ORDER,
          element: <Order/>
        },

        {
          path: RouterMain.ADMIN,
          element: <Admin/>,
          children: [
            {
              path: RouterAdmin.LIST,
              element: <AdminListRouting/>,
              children: [
                {
                  path: RouterList.LIST_ORDERS,
                  element: <AdminListOrders/>
                },

                {
                  path: RouterList.LIST_MODERATORS,
                  element: <AdminListModerators/>
                },

                {
                  path: RouterList.LIST_LODGERS,
                  element: <AdminListLodgers/>
                },

                {
                  path: RouterList.LIST_NEWS,
                  element: <AdminListNews/>,
                },
              ]
            },
            {
              path: RouterAdmin.LIST_CREATE_NEWS,
              element: <AdminCreateNews/>
            },
            {
              path: RouterAdmin.LIST_CREATE_NEWS_PARAMS,
              element: <AdminCreateNews/>
            },
          ]
        },
      ]
    },
  ]);

  return <RouterProvider router={router}/>;
};
