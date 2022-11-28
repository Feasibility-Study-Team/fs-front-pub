import api from "../constant/api";

// eslint-disable-next-line
export default {
    createInventor: (value) => api.post('admin/inventors', value),
    registerInventor: (value) => api.post('/register', value),
    getInventorId: (id) => api.get(`/admin/inventors/${id}`),

    getInstitusi: () => api.get('/admin/institusi'),
    loginInventor: (value) => api.post('/login', value)
}