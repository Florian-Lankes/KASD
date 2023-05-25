import axios from "axios";
import { serviceUrl } from "../fixtures.js";
export const KASDMapsService = {
    KASDMapsUrl: serviceUrl,

    async createUser(user) {
        const res = await axios.post(`${this.KASDMapsUrl}/api/users`, user);
        return res.data;
    },

    async getUser(id) {
        const res = await axios.get(`${this.KASDMapsUrl}/api/users/${id}`);
        return res.data;
    },

    async getAllUsers() {
        const res = await axios.get(`${this.KASDMapsUrl}/api/users`);
        return res.data;
    },

    async deleteAllUsers() {
        const res = await axios.delete(`${this.KASDMapsUrl}/api/users`);
        return res.data;
    },

    async createPlacemark(id, placemark) {
        const res = await axios.post(`${this.KASDMapsUrl}/api/users/${id}/placemarks`, placemark);
        return res.data;
    },

    async getPlacemark(id) {
        const res = await axios.get(`${this.KASDMapsUrl}/api/placemarks/${id}`);
        return res.data;
    },

    async getAllPlacemarks() {
        const res = await axios.get(`${this.KASDMapsUrl}/api/placemarks`);
        return res.data;
    },

    async deleteAllPlacemarks() {
        const res = await axios.delete(`${this.KASDMapsUrl}/api/placemarks`);
        return res.data;
    },

}