import axios from 'axios';
import data from "./constants.json"

export const requests = {
    getCities: async (path, successcallback, errorcallback) => {
        await axios.get(data['URLServer  '] + path, data.appId)
            .then(response => {
                if(successcallback != null)
                    successcallback(response);
            })
            .catch((error) => {
                if(errorcallback != null)
                    errorcallback(error);
            })
    },

    getPoints: async (town, path, successcallback, errorcallback) => {
        await axios.get(data['URLServer  '] + path + town.id, data.appId)
            .then(response => {
                if(successcallback != null)
                    successcallback(response);
            })
            .catch((error) => {
                if(errorcallback != null)
                    errorcallback(error);
            })
    }
}