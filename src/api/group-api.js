import Boom from "@hapi/boom";
import { db } from "../model/db.js";

export const groupApi = {
    find: {
        auth: false,
        handler: async function (request, h) {
            try {
                const groups = await db.groupStore.getAllGroups();
                return groups;
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },

    findOne: {
        auth: false,
        async handler(request) {
            try {
                const group = await db.groupStore.getGroupById(request.params.id);
                if (!group) {
                    return Boom.notFound("No Group with this id");
                }
                return group;
            } catch (err) {
                return Boom.serverUnavailable("No Group with this id");
            }
        },
    },

    create: {
        auth: false,
        handler: async function (request, h) {
            try {
                const group = request.payload;
                const userId = request.params.id;
                const newGroup = await db.groupStore.addGroup(userId ,group);
                if (newGroup) {
                    return h.response(newGroup).code(201);
                }
                return Boom.badImplementation("error creating group");
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },

    deleteOne: {
        auth: false,
        handler: async function (request, h) {
            try {
                const group = await db.groupStore.getGroupById(request.params.id);
                if (!group) {
                    return Boom.notFound("No Group with this id");
                }
                await db.groupStore.deleteGroupById(group._id);
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("No Group with this id");
            }
        },
    },

    deleteAll: {
        auth: false,
        handler: async function (request, h) {
            try {
                await db.groupStore.deleteAllGroups();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },
};