import { useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

export const ActionButton = ({ children, className }) => {
  return (
    <button className={`py-2 rounded-xl  text-xs font-bold ${className}`}>
      {children}
    </button>
  );
};

export const EditButton = ({ children }) => {
  return (
    <ActionButton className={`text-yellow bg-yellow-light w-24`}>
      {children}
    </ActionButton>
  );
};

export const CompleteButton = ({ children }) => {
  return (
    <ActionButton className={`text-success-green bg-green-light w-24`}>
      {children}
    </ActionButton>
  );
};

export const AddButton = ({ children, to }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-yellow text-white rounded-full w-12 h-12 flex justify-center items-center"
      onClick={() => {
        navigate(to);
      }}
    >
      <span className="text-xl">
        <BsPlusLg />
      </span>
    </button>
  );
};
