import {IoMdRemoveCircleOutline} from "react-icons/io";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {TbEditCircle} from "react-icons/tb";

function Todo() {
    return (
        <div className={"todo-wrapper"}>
            <div>Ben İlk Todoyum</div>
            <div>
                <IoMdRemoveCircleOutline className={"icons"}/>
                <TbEditCircle className={"icons"}/>
                <IoIosCheckmarkCircleOutline className={"icons"}/>
            </div>
        </div>
    );
}

export default Todo;