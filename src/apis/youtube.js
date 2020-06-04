import axios from 'axios';

const KEY = 'AIzaSyC-pR9Ib_1QfXoIHryxcbuuymDuUq0dKRE';

export const baseParams = {
    part: 'snippet',
    maxResults: 5,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: baseParams 
});