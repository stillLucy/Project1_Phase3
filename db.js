import { openDB } from "idb";

export const database = openDB ("movie-note", 1, {
    upgrade(db) {
        //creates object store
        db.createObjectStore("notes");
        db.createObjectStore("favorites");

    },
});
