import api from "../constant/api";

// eslint-disable-next-line
export default {
    
    getPenguji: () => api.get('/admin/penguji'),
    deletePenguji: (id) => api.delete(`/admin/penguji/${id}`),
    getPengujiById: (id) => api.get(`/admin/penguji/${id}`),


    getInventor: () => api.get('/admin/inventors'),
    deleteInventor: (id) => api.delete(`/admin/inventors/${id}`),

    getAlat: () => api.get('/admin/alat'),
    getAlatId: (id) => api.get(`/admin/alat/${id}`),

    getInstitusi: () => api.get('/admin/institusi'),
    addInstitusi: (value) => api.post('/admin/institusi', value),

    addAspek: (value) => api.post('/admin/aspek', value),
    getAspek: () => api.get('/admin/aspek'),
    getAspekId: (id) => api.get(`/admin/aspek/${id}`),
    updateAspek: (id, value) => api.put(`/admin/aspek/${id}`, value),
    deleteAspek: (id) => api.delete(`/admin/aspek/${id}`),

    addParameter: (value) => api.post('/admin/parameter', value),
    getParameter: () => api.get('/admin/parameter'),
    getParameterId: (id) => api.get(`/admin/parameter/${id}`),
    updateParameter: (id, value) => api.put(`/admin/parameter/${id}`, value),
    deleteParameter: (id) => api.delete(`/admin/parameter/${id}`),

    addData: (value) => api.post('/admin/data-aspek', value),
    getData: () => api.get('/admin/data-aspek'),
    getDataId: (id) => api.get(`/admin/data-aspek/${id}`),
    updateData: (id, value) => api.put(`/admin/data-aspek/${id}`, value),
    deleteData: (id) => api.delete(`/admin/data-aspek/${id}`),
}