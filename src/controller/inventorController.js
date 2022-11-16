import api from "../constant/api";

// eslint-disable-next-line
export default {
    createInventor: (value) => api.post('admin/inventors', value)
}