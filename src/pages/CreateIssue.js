import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bold from "../components/general/Typography/Bold";
import { Wrapper } from "../components/general/Wrapper";
import { ImageView } from "../components/issues/ImageView";
import NormalLayout from "../components/NormalLayout";
import { getUsers } from "./../redux/actions/user.actions";
import { postIssues } from "./../redux/actions/issues.action";
import { getServices } from "./../redux/actions/services.action";
import { useDispatch, useSelector } from "react-redux";
export const CreateIssue = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issue);
    disatch(postIssues(issue));
    if (issueData.error) {
      return;
    } else {
      navigate("/my_issues");
    }
  };

  const users = useSelector((state) => state.userDetails.users);
  const services = useSelector((state) => state.servicesData.services);
  const issueData = useSelector((state) => state.IssuesData);
  const dispatch = useDispatch();

  const disatch = useDispatch();
  const [issue, setUser] = useState({
    issue: "",
    service: 1,
    tag: 1,
    created_by: 1,
  });
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getServices());
  }, []);

  return (
    <NormalLayout navigation={{ title: "Create Issue", showBack: true }}>
      {issueData.error && (
        <div className="h-12 bg-yellow-light rounded-xl mx-2 flex justify-center items-center text-red-500">
          {issueData.error}
        </div>
      )}
      <Wrapper className="mx-2">
        <form className="flex flex-col gap-2 px-2">
          <div className="flex flex-col gap-2">
            <Bold htmlFor="">Issue</Bold>

            <textarea
              id="issue_description"
              name="issue"
              onChange={changeInput}
              rows="4"
              placeholder="Enter issue description"
              className="rounded-xl p-2 bg-yellow-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Bold className="text-sm"> Service</Bold>

            <select
              name="service"
              className="h-12 bg-yellow-light rounded-xl"
              id="lang"
              onChange={changeInput}
              // value={service}
            >
              <option value="">Select a service</option>
              {services &&
                services.map((service, k) => (
                  <option
                    value={service.id}
                    key={service.id}
                    className="h-12 bg-yellow-light rounded-xl"
                  >
                    {service.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Bold className="text-sm">Tag Someone</Bold>
            <select
              name="tag"
              onChange={changeInput}
              className="h-12 bg-yellow-light rounded-xl"
            >
              <option value="">Select a user to tag</option>
              {users &&
                users.map((user, k) => (
                  <option
                    value={user.id}
                    key={user.id}
                    className="h-12 bg-yellow-light rounded-xl"
                  >
                    {user.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="grid py-2 grid-cols-3 sm:grid-cols-4">
            {/* images */}
            <ImageView />
           
          </div>
          <button
            type="button"
            className={`py-2 rounded-xl text-xs font-bold text-yellow bg-yellow-light w-48 mx-auto`}
          >
            Upload Image
          </button>

          <button
            type="submit"
            onClick={handleSubmit}
            className={`py-3 rounded-xl font-bold bg-yellow text-white w-5/6 mx-auto mt-3`}
          >
            Post Issue
          </button>
        </form>
      </Wrapper>
    </NormalLayout>
  );
};
