import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"D:/active_projects/tujjor_test/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
