import { data } from "../models/data.js";
import { responseSuccess, responseError  } from "../response/pyload.js";

// Controller itu butuh req dan res
const getData = (req, res) => {
    return responseSuccess(res, 200, "success", "Data buah", data);
};

const apalah = ( req, res ) => {
    return res.json({message: "kelas web"});
}

export { getData, apalah };