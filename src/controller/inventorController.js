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

    loginInventor: (value) => api.post('/login', value),

    createTemp: (value) => api.post('temp/create', value)
}