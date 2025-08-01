import Drawer from "@mui/material/Drawer";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../redux/store.tsx";
import {setDrawer} from "../redux/appSlice.tsx";
/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 31 Jul 2025
 * <p>
 * @description:
 */
function BasketDetails() {
    const {drawer} = useSelector((state:RootState)=>state.app);
    const dispatch = useDispatch();

    const closeDrawer = () => {
        dispatch(setDrawer(false));
    }
    return (
        <Drawer open={drawer} anchor={"right"} onClose={closeDrawer}>
            Sao
        </Drawer>
    )
}

export default BasketDetails
