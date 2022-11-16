import api from "../constant/api";

// eslint-disable-next-line
export default {
    
    getPenguji: () => api.get('/admin/penguji'),
    deletePenguji: (id) => api.delete(`/admin/penguji/${id}`),


    getInventor: () => api.get('/admin/inventors'),
    deleteInventor: (id) => api.delete(`/admin/inventors/${id}`),

    getAlat: () => api.get('/admin/alat'),
    getAlatId: (id) => api.get(`/admin/alat/${id}`)
}