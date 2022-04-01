import {
  Admin,
  Issues,
  NewUser,
  Users,
  ViewSingleUser,
} from "../../AdminPages";
import { Reports } from "../../AdminPages/Reports";
import {
  CreateIssue,
  Home,
  MyIssues,
  Notifications,
  ResolvedIssues,
  TaggedIssue,
  UnresolvedIssues,
  ViewIssue,
} from "../../pages";
import { Login } from "../../pages/Login";

export const useRouter = () => [
  // myIssues
  {
    path: "/",
    element: <Home />,
  },

  // Issue Routes
  {
    path: "/my_issues",
    element: <MyIssues />,
  },
  {
    path: "/my_issues/:id",
    element: <ViewIssue />,
  },
  {
    path: "/my_issues/create",
    element: <CreateIssue />,
  },

  {
    path: "/tagged",
    element: <TaggedIssue />,
  },

  {
    path: "/resolved",
    element: <ResolvedIssues />,
  },

  {
    path: "/unresolved",
    element: <UnresolvedIssues />,
  },

  // End of Issue Routes

  {
    path: "/notifications",
    element: <Notifications />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  // ADMIN ROUTES
  {
    path: "/admin/",
    element: <Admin />,
  },

  {
    path: "/admin/issues",
    element: <Issues />,
  },

  {
    path: "/admin/users",
    element: <Users />,
  },

  {
    path: "/admin/new_user",
    element: <NewUser />,
  },

  {
    path: "/admin/users/:id",
    element: <ViewSingleUser />,
  },

  {
    path: "/admin/reports",
    element: <Reports />,
  },

  // ADMIN ROUTES END
];
