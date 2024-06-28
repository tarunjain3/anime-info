// api.js (or useApiRequest.js)

import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export function useApiRequest({ url, method = 'get' }) {
  const router = useRouter();
  const baseURL = "https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/"

  const isLoading = ref(false);
  const error = ref(null);

  const authToken = "eyJhbGciOiJIUzI1NiJ9.dHVzaGFyLnNhaW5pQGxvYmIuaW4.1InOHLHAMipL7u-8BHmP92fVbWADx9iiC9H0N1Cc6pc"//ref(localStorage.getItem('token'));

  const config = computed(() => ({
    method,
    url: baseURL + url,
    headers: {
      Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
    },
  }));

  async function sendRequest(data) {
    isLoading.value = true;
    error.value = null;

    try {
      if (data) config.value.data = data;

      const response = await axios(config.value);
      return response.data;
    } catch (err) {
      if (err?.response?.status === 401 && err?.response?.data?.msg === 'Token has expired') {
        localStorage.clear();
        router.push('/login');
      }
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    error,
    sendRequest,
  };
}
