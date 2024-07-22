import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import GreenCheckmark from "./checkmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <BsPlus className="fs-3" />
            <BsThreeDotsVertical className="fs-4" />
        </div>
    );
}
