import axios from "axios"

export const API_URL = {
  AUTH: {
    LOGIN: '/auth/login',
  },
  USER: {
    PROFILE: '/user/profile',
  },
  TAG: {
    CRUD: '/tag',
    GET_BY_TYPE: (type: string) => `/tag/${type}`
  },
  TECHNOLOGY: {
    CRUD: '/technology',
  },
  PROJECT: {
    CRUD: '/project',
    MINE: '/project/mine',
    PAGINATE: (page: number) => `/project/${page}`
  }
}

export const getToken = () => localStorage.getItem('access_token')

export const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
})