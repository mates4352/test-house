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
import {ListApplications} from "../../../sub-pages/list-applications";
import {Application} from "../../../sub-pages/application";
import {PersonalData} from "../../../sub-pages/personal-data";

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
          path: RouterAuth.AUTH_SIGIN,
          element: <SigIn/>
        },

        {
          path: RouterAuth.PHONE_CODE,
          element: <PhoneCode/>
        },

        {
          path: RouterAuth.AUTH_REGISTRATION_ADMIN,
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
              path: RouterMain.PERSONAL_CABINET_DATA,
              element: <PersonalData/>
            },

            {
              path: RouterMain.PERSONAL_CABINET_List_APPLICATIONS,
              element: <ListApplications/>
            }
          ]
        },

        {
          path: RouterMain.APPLICATION,
          element: <Application/>
        },
      ]
    },
  ]);

  return <RouterProvider router={router}/>;
};
