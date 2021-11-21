import { REORDER } from "./types";

export function reorder(object) {
    return {
        type: REORDER,
        payload: object
    }
}