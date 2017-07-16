import dispatcher from "../Dispatcher"

export function saveProfile(name, country) {
    dispatcher.dispatch({
        type: "SAVE_PROFILE",
        profile: {name, country},
    });
}