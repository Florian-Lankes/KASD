import { db } from "../model/db.js";

export const placemarkController = {

    index: {
        handler: async function (request, h) {
            const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
            const viewData = {
                title: "Placemark",
                placemark: placemark,
            };
            return h.view("placemark-page", viewData);
        },
    },
};
