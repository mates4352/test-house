import React, { FC } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Auth } from '../../../pages/auth';
import { Main } from '../../../pages/main';
import { SigIn } from '../../../sub-pages/sig-in';
import { PhoneCode } from '../../../sub-pages/phone-code';
import { Home } from '../../../sub-pages/home';
import { News } from '../../../sub-pages/news';
import { Contacts } from '../../../sub-pages/contacts';
import { Dispatcher } from '../../../sub-pages/dispatcher';
import { PersonalCabinet } from '../../../sub-pages/personal-cabinet';
import { Appeal } from '../../../sub-pages/appeal';
import { RouterAuth } from '../../../../../core/utils/enum/routers/router-auth';
import { RouterMain } from '../../../../../core/utils/enum/routers/router-main';
import { CompanyInfo } from '../../../sub-pages/company-info';
import { NewsInfo } from '../../../sub-pages/news-info';
import { ListOrders } from '../../../sub-pages/list-orders';
import { Order } from '../../../sub-pages/order';
import { PersonalData } from '../../../sub-pages/personal-data';
import { Admin } from '../../../sub-pages/admin';
import { RouterAdmin } from '../../../../../core/utils/enum/routers/router-admin';
import { AdminListModerators } from '../../../sub-pages/admin-list-moderators';
import { AdminListPerson } from '../../../sub-pages/admin-list-person';
import { AdminListNews } from '../../../sub-pages/admin-list-news';
import { AdminCreateNews } from '../../../sub-pages/admin-create-news';
import { AdminListRouting } from '../../../sub-pages/admin-list-routing';
import { RouterList } from '../../../../../core/utils/enum/routers/router-list';
import { ListAllNews } from '../../../sub-pages/list-all-news';
import { ListDistrictNews } from '../../../sub-pages/list-district-news';
import { AdminEditPerson } from '../../../sub-pages/admin-edit-person';
import { AdminEditModerator } from '../../../sub-pages/admin-edit-moderator/ui/Admin-edit-moderator';
import { AdminEditPersonData } from '../../../sub-pages/admin-edit-person-data';
import { AdminEditPersonListOrders } from '../../../sub-pages/admin-person-list-orders';
import { AdminListOrders } from '../../../sub-pages/admin-list-orders';
import { AdminOrderChat } from '../../../sub-pages/admin-order-chat';
import { CabinetMain } from '../../../sub-pages/cabinet-main';

type WrapperRouterProviderType = {};

export const WrapperRouterProvider: FC<WrapperRouterProviderType> = ({}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={RouterAuth.AUTH} />,
    },

    {
      path: RouterAuth.AUTH,
      element: <Auth />,
      children: [
        {
          path: RouterAuth.SIG_IN,
          element: <SigIn />,
        },

        {
          path: RouterAuth.PHONE_CODE,
          element: <PhoneCode />,
        },
      ],
    },

    {
      path: RouterMain.MAIN,
      element: <Main />,
      children: [
        {
          path: RouterMain.HOME,
          element: <Home />,
        },

        {
          path: RouterMain.NEWS,
          element: <News />,
          children: [
            {
              index: true,
              element: <ListAllNews />,
            },

            {
              path: RouterMain.DISTRICT_NEWS,
              element: <ListDistrictNews />,
            },
          ],
        },

        {
          path: RouterMain.NEWS_PARAMS,
          element: <NewsInfo />,
        },

        {
          path: RouterMain.APPEAL,
          element: <Appeal />,
        },

        {
          path: RouterMain.CONTACTS,
          element: <Contacts />,
        },

        {
          path: RouterMain.CONTACTS_PARAMS,
          element: <CompanyInfo />,
        },

        {
          path: RouterMain.DISPATCHER,
          element: <Dispatcher />,
        },

        {
          path: RouterMain.PERSONAL_CABINET,
          element: <PersonalCabinet />,
          children: [
            {
              path: '',
              element: <CabinetMain />,
              children: [
                {
                  index: true,
                  element: <PersonalData />,
                },

                {
                  path: RouterMain.PERSONAL_CABINET_LIST_ORDERS,
                  element: <ListOrders />,
                },
              ],
            },

            {
              path: RouterMain.ORDER_PARAMS,
              element: <Order />,
            },
          ],
        },

        {
          path: RouterMain.ADMIN,
          element: <Admin />,
          children: [
            {
              path: '',
              element: <AdminListRouting />,
              children: [
                {
                  index: true,
                  element: <AdminListOrders />,
                },

                {
                  path: RouterList.LIST_MODERATORS,
                  element: <AdminListModerators />,
                },

                {
                  path: RouterList.LIST_PERSON,
                  element: <AdminListPerson />,
                },

                {
                  path: RouterList.LIST_NEWS,
                  element: <AdminListNews />,
                },
              ],
            },
            {
              path: RouterAdmin.CHAT_PARAMS,
              element: <AdminOrderChat />,
            },

            {
              path: RouterAdmin.EDIT_MODERATOR_PARAMS,
              element: <AdminEditModerator />,
            },
            {
              path: RouterAdmin.EDIT_PERSON_PARAMS,
              element: <AdminEditPerson />,
              children: [
                {
                  index: true,
                  element: <AdminEditPersonData />,
                },

                {
                  path: RouterAdmin.LIST_ORDERS,
                  element: <AdminEditPersonListOrders />,
                },
              ],
            },
            {
              path: RouterAdmin.CREATE_NEWS,
              element: <AdminCreateNews />,
            },
            {
              path: RouterAdmin.CREATE_NEWS_PARAMS,
              element: <AdminCreateNews />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
