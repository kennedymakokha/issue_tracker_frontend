import { BsPlusLg } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

export const Field = () => {
  return (
    <input
      type="text"
      className="h-full w-full bg-inherit text-sm focus:outline-yellow"
    />
  );
};

export const Input = () => {
  return (
    <div
      className="flex h-12 my-1  rounded-3xl"
      style={{ backgroundColor: "#FDEEB5" }}
    >
      {/* send button */}
      <button className="h-12 w-10 text-yellow  bg-yellow-light flex items-center justify-center rounded-l-3xl  ">
        <BsPlusLg className="text" />
      </button>

      <Field />

      <button className=" h-full px-2 text-yellow bg-yellow-light text-2xl rounded-r-3xl">
        <RiSendPlaneFill />
      </button>
    </div>
  );
};
