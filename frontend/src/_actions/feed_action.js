
import axios from 'axios';
import {CREATE_FEED} from './types'

export function createFeed(dataToSubmit) {
    const request = axios
        .post('/api/feed/uploadFeed', dataToSubmit)
        .then((response) => response.data);

    return {
        type: CREATE_FEED,
        payload: request,
    };
}