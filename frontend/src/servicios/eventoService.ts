import axios from 'axios';

const API_URL = 'http://localhost:5000/api/eventos';

export const obtenerEventos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearEvento = async (eventoData: any, token: string) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  const response = await axios.post(API_URL, eventoData, config);
  return response.data;
};

export const actualizarEvento = async (id: string, eventoData: any, token: string) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  const response = await axios.put(`${API_URL}/${id}`, eventoData, config);
  return response.data;
};

export const eliminarEvento = async (id: string, token: string) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  await axios.delete(`${API_URL}/${id}`, config);
};
