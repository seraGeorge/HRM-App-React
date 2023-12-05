import { useContext } from "react";
import { deleteData } from "../../core/api/functions.ts";
import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import DataContext from "../../core/store/DataContext.tsx";
import { toast } from "react-toastify";
import DeleteModalWrapper from "./../DeleteModal/deleteModal.ts";
import {
  DELETE_MODAL_HEADING,
  CONFIRM_DELETE_TEXT,
  WARNING_HEADING,
  WARNING_TEXT,
} from "./constants/constants.ts";

function DeleteModal({
  changeDltModalOpenStatus,
  employeeId,
}: {
  changeDltModalOpenStatus: () => void;
  employeeId: string;
}) {
  const { fetchEmployeeData } = useContext(DataContext);

  const confirmDlt = async () => {
    const url = `/employees/${employeeId}.json`;

    try {
      await deleteData(url); // deleting employee in firebase
      // Display toast for success state
      toast.success(`Deleted user ${employeeId}`, {
        toastId: "delete-toast-id",
      });
    } catch (error) {
      toast.error("Error deleting user", { toastId: "delete-user" });
    } finally {
      fetchEmployeeData(); // data fetched after employee deletion
    }

    changeDltModalOpenStatus();
  };

  return (
    <DeleteModalWrapper>
      <Button
        icon="close"
        className="close-btn"
        onClick={changeDltModalOpenStatus}
      ></Button>
      <h2 className="delete-modal-heading">{DELETE_MODAL_HEADING}</h2>
      <p className="confirm-delete">{CONFIRM_DELETE_TEXT(employeeId)}</p>
      <div className="warning-container">
        <div className="warning-heading common-flex">
          <span className="material-icons-round">warning</span>
          <p className="title">{WARNING_HEADING}</p>
        </div>
        <p className="warning-text">{WARNING_TEXT}</p>
      </div>
      <ButtonGrpWrapper>
        <Button className="cancel-btn" onClick={changeDltModalOpenStatus}>
          No, Cancel
        </Button>
        <Button className="delete-btn" icon="delete" onClick={confirmDlt}>
          Yes, confirm delete
        </Button>
      </ButtonGrpWrapper>
    </DeleteModalWrapper>
  );
}
export default DeleteModal;
