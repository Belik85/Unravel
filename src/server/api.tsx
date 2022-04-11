import React from 'react'


import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:12000',
})

export const authAPI = {
    login(data: LoginDataType) {
        return instance.post("/login", data)
    }}

export type LoginDataType = {
    userName: string
    passWord: string
}