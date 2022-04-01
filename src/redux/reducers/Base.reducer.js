import UserReducer from "./../reducers/user.reducer";
import ServiceReducer from "./../reducers/services.reducer";
import IssueReducer from "./../reducers/issues.reducer";

const baseReduce = {
  userDetails: UserReducer,
  servicesData: ServiceReducer,
  IssuesData: IssueReducer,
};

export default baseReduce;
