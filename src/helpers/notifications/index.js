import { toast } from "react-toastify";

export const toastSuccess = (message) => {
  toast.success(`${message}`, {
    position: "top-center",
    autoClose: 5000,
  });
};

export const toastError = (message) => {
  toast.error(`${message}`, {
    position: "top-center",
    autoClose: 5000,
  });
};
