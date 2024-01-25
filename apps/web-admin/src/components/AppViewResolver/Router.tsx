import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { JoyOrderDashboardTemplate } from '../Layout/JoyOrderDashboardTemplate';
import { CompanyProfilePage, CreateJobOfferPage, HomePage, JobOffersPage, MessagesPage } from '../../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <JoyOrderDashboardTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'company',
        element: <CompanyProfilePage />,
      },
      {
        path: 'messages',
        element: <MessagesPage />,
      },
      {
        path: 'jobOffers',
        element: <JobOffersPage />,
      },
      {
        path: 'jobOffers/create',
        element: <CreateJobOfferPage />
      }
    ],
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
