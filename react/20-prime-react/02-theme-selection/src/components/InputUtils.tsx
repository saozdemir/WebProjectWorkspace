import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";

/**
  * @author saozdemir
  * @project WebProjectWorkspace
  * @date 28 Jul 2025
  * <p>
  * @description:
  */

 function InputUtils() {
    const [value, setValue] = useState('');
    const [desc, setDesc] = useState('');

     return (
         <div>
             <div className="card flex justify-content-center align-items-center">
                 <FloatLabel>
                     <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                     <label htmlFor="username">Username</label>
                 </FloatLabel>
             </div>
             <div className="card flex justify-content-center align-items-center">
                 <FloatLabel>
                     <InputTextarea id="description" value={desc} onChange={(e) => setDesc(e.target.value)} rows={5} cols={30} />
                     <label htmlFor="description">Description</label>
                 </FloatLabel>
             </div>
         </div>
     )
 }

 export default InputUtils
