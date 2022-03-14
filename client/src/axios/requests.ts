import React from "react";
import axios, {AxiosRequestConfig, Method} from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export const requestToServer = async <T, P, R, S>(
    setData: React.Dispatch<T>,
    setIsLoading: React.Dispatch<boolean>,
    setError: React.Dispatch<string>,
    url: string,
    method: Method = 'get',
    body?: S
) => {
    try {
        setIsLoading(true);
        console.log(`${API_URL}/calculator/${url}`)
        const response = await axios.request<T, AxiosRequestConfig, S>({
            method,
            data: body,
            url: `${API_URL}/calculator/${url}`
        });
        const data = response.data;
        setData(data);
        return data;
    } catch (e) {
        setError(String(e));
    } finally {
        setIsLoading(false);
    }
}
