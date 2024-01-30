import axios from "axios"



const baseUrl = "https://65a7c6ee94c2c5762da7865c.mockapi.io/"
const api = {
   get: async () => {
      // return axios.get(`${baseUrl}/contacts`)
      const ret = await axios.get(`${baseUrl}/contacts`)
      return ret.data
   },
   post: async (contact) => {
      return axios.post(`${baseUrl}/contacts`, contact).then((response) => {
         console.log(response.data)
      })
   },
   put: async (id, contact) => {
      return axios.put(`${baseUrl}/contacts/${id}`, contact).then((response) => {
         console.log(response.data)
      })
   },
   delete: async (id, contact) => {
      return axios.delete(`${baseUrl}/contacts/${id}`, contact).then((response) => {
         console.log(response.data)
      })
   },
}
export default api