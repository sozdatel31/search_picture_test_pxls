import axios from 'axios'

const setInstance = () => axios.create({
    baseURL: `https://api.pexels.com`,
   // withCredentials: true,
    headers: {
        Authorization: '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
    }
})

export const appApi = {
    getPicture(page: number, per_page: number) {
        return setInstance().get(`/v1/curated?page=${page}&per_page=${per_page}\n`)
    },
    searchPicture(query: string, per_page: number, page?: number) {
        return setInstance().get(`/v1/search?query=${query}&page=${page}&per_page=${per_page}\n`)
    },
    searchIdPicture(id: number) {
        return setInstance().get(`/v1/photos/${id}\n`)
    }
}