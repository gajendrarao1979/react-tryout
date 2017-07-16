import {EventEmitter} from "events";

import dispatcher from "../Dispatcher";

class ProfileStore extends EventEmitter {

    constructor () {
        super();
        this.profile = {name: "Gajendra", country : "India"};
    }

    getProfile() {
        return this.profile;
    }

    updateName(name) {
        this.profile = {name};
        this.emit("change");
    }

    updateCountry(country) {
        this.profile = {country};
        this.emit("change");
    }

    handleAction(action) {
        if (action.type === "SAVE_PROFILE") {
            this.updateName(action.profile.name);
            this.updateCountry(action.profile.country);
        }
    }

}

const profileStore = new ProfileStore;

dispatcher.register(profileStore.handleAction.bind(profileStore));

export default profileStore;