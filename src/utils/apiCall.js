import axios from "axios";
import { getLocalStorageItem } from "./setWithExpire";
import { toast } from "react-toastify";

// Create an Axios instance with the base URL
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL, // Replace with your API URL
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000, // 10 seconds timeout for requests
});
apiClient.interceptors.request.use(
    (config) => {
        const token = getLocalStorageItem("token"); // Or use a context if available 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors globally
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(
                `API error: ${error.response.status} - ${error.response.statusText}`
            );
        }
        return Promise.reject(error);
    }
);

// Define the apiCall function
const apiCall = async (endpoint, method, data = null, config = null) => {
    try {
        const response = await apiClient({
            url: endpoint,
            method: method,
            data: data || null,
            ...config, // Merge additional config options
        });
        const dat = await response.data;
        return dat;
    } catch (error) {
        if (error?.status == 401) {
            localStorage.removeItem('token');
            localStorage.removeItem("user");
            toast.error("your token expired please login");
        }
        console.error("API call error:", error);
        throw error; // Re-throw the error for further handling
    }
};

export default apiCall;
