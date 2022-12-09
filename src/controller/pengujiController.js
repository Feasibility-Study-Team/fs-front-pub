import api from "../constant/api";

// eslint-disable-next-line
export default {
    createPenguji: (value) => api.post('admin/penguji', value)
}