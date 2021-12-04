import { MOVE_COLOR } from "../utils/constTypes";

export function switchColor(destination) {
    return {
        type: MOVE_COLOR,
        payload: {
            destination
        }
    }
}