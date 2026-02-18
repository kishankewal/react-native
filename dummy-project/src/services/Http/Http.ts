import axios from "axios";
import { HttpResultType } from "../../types/Http/HttpResultType";

export default class Http {
    private axiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "",
            withCredentials: true,
        });
        this.axiosInstance.interceptors.request.use((config) => {
            config.headers["Accept-Language"] = "en";
            return config;
        });
    }

    private isRequestSuccessful(status: number): boolean {
        return status >= 200 && status <= 299;
    }

    async get(apiEndpoint: string, params: object): Promise<HttpResultType> {
        // try {
            // this.validator.isValidString("apiEndpoint", apiEndpoint);
            const result = await this.axiosInstance.get(apiEndpoint, { params });
            return { data: result.data, status: result.status, isRequestSuccessful: this.isRequestSuccessful(result.status) };
        // } catch (e) {
        //     this.logger.error(e);
        //     throw e;
        // }
    }

    async post(apiEndpoint: string, params: object): Promise<HttpResultType> {
        // try {
            const result = await this.axiosInstance.post(apiEndpoint, params);
            return { data: result.data, status: result.status, isRequestSuccessful: this.isRequestSuccessful(result.status) };
        // } catch (e) {
        //     this.logger.error(e);
        //     throw e;
        // }
    }

    async postFormData(apiEndpoint: string, formData: FormData): Promise<HttpResultType> {
        // try {
            // this.validator.isValidString("apiEndpoint", apiEndpoint);
            const result = await this.axiosInstance.post(apiEndpoint, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            return { data: result.data, status: result.status, isRequestSuccessful: this.isRequestSuccessful(result.status) };
        // } catch (e) {
        //     this.logger.error(e);
        //     throw e;
        // }
    }

    async put(apiEndpoint: string, params: object): Promise<HttpResultType> {
        // try {
        //     this.validator.isValidString("apiEndpoint", apiEndpoint);
            const result = await this.axiosInstance.put(apiEndpoint, params);
            return { data: result.data, status: result.status, isRequestSuccessful: this.isRequestSuccessful(result.status) };
        // } catch (e) {
        //     this.logger.error(e);
        //     throw e;
        // }
    }

    async delete(apiEndpoint: string, params: object): Promise<HttpResultType> {
        // try {
        //     this.validator.isValidString("apiEndpoint", apiEndpoint);
            const result = await this.axiosInstance.delete(apiEndpoint, { params });
            return { data: result.data, status: result.status, isRequestSuccessful: this.isRequestSuccessful(result.status) };
        // } catch (e) {
        //     this.logger.error(e);
        //     throw e;
        // }
    }

    async postWithoutTryCatch(apiEndpoint: string, params: object): Promise<HttpResultType> {
        // this.validator.isValidString("apiEndpoint", apiEndpoint);
        const result = await this.axiosInstance.post(apiEndpoint, params);
        return { data: result.data, status: result.status, isRequestSuccessful: this.isRequestSuccessful(result.status) };
    }
}