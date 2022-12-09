import api from "../constant/api";

// eslint-disable-next-line
export default {
    getUji: () => api.get('/admin/uji'),
    getAspek: () => api.get('/admin/aspek'),
    getUjiId: (id) => api.get(`/admin/uji/${id}`),
    getUjiPenguji: (id) => api.get(`/admin/uji/penguji/${id}`),
    getTempData: (alat, data) => api.get(`/temp/${alat}/${data}`),
    updateUji: (id, values) => api.put(`/admin/uji/${id}`, values)
}