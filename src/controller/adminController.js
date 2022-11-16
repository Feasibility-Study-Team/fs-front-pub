import api from "../constant/api";

// eslint-disable-next-line
export default {
    getAlat: () => api.get('/admin/alat'),
    getPenguji: () => api.get('/admin/penguji'),
    getInventor: () => api.get('/admin/inventors'),

    getAlatId: (id) => api.get(`/admin/alat/${id}`)
}