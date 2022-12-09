import api from "../constant/api";

// eslint-disable-next-line
export default {
    createInventor: (value) => api.post('/admin/inventors', value),
    registerInventor: (value) => api.post('/register', value),
    getInventorId: (id) => api.get(`/admin/inventors/${id}`),

    getInstitusi: () => api.get('/admin/institusi'),
    getAspek: ()=>api.get('/admin/aspek'),
    getAspekId: (id)=>api.get(`/admin/aspek/${id}`),

    createAlat: (value) => api.post(`/admin/alat`, value),
    getAlatId: (id) => api.get(`/admin/alat/${id}`),
    updateAlat: (id, value) => api.put(`/admin/alat/${id}`, value),

    loginInventor: (value) => api.post('/login', value),

    createTemp: (value) => api.post('/temp/create', value),
    getTempUser: (alat, data) => api.get(`/temp/${alat}/${data}`),

    getPengujiId: (id) => api.get(`/admin/penguji/${id}`),
    getUjiId: (id) => api.get(`/admin/uji/${id}`)
}