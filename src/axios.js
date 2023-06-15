import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/THSrKHPfec8vBinIUuAQ';

export default axios.create({
  baseURL,
  timeout: 5000,
  headers: { ContentType: 'application/json', Accept: '*/*' },
});
