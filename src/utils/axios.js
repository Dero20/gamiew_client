import Axios from "axios";

export const axiosInstance = Axios.create({
	baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000",
});

export const axiosPublicInstance = Axios.create({
	baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000",
});

axiosInstance.interceptors.request.use((req) => {
	const token = localStorage.getItem("token") || "where is my token";
	return {
		...req,
		headers: {
			Authorization: `bearer ${token}`,
			"Content-Type": "application/json",
		},
	};
});
