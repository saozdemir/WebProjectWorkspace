import { Calendar } from 'primereact/calendar';
import {useState} from "react";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 28 Jul 2025
 * <p>
 * @description:
 */

function CalendarUtil() {
    const [date, setDate] = useState(null);
    return (
        <div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="buttondisplay" className="font-bold block mb-2">
                        Button Display
                    </label>
                    <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon placeholder={"DD/MM/YYYY"} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="buttondisplay" className="font-bold block mb-2">
                        Icon Display
                    </label>

                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
                </div>
                <div className="flex-auto">
                    <label htmlFor="buttondisplay" className="font-bold block mb-2">
                        Icon Template
                    </label>

                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
                </div>
            </div>
        </div>
    )
}

export default CalendarUtil;
