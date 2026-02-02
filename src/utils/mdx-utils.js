import { api } from '../services/api';

export const getPosts = async () => {
  try {
    console.log('Chamando API...');
    const { data } = await api.get('/posts');
    console.log('Dados recebidos:', data);
    
    if (data) {
      return data;
    }

    return [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error.message);
    console.error('Detalhes:', error.response?.data);
    return [];
  }
}

export const getPostBySlug = async (id) => {
  try {
    console.log('Buscando post com ID:', id);
    const { data } = await api.get(`/posts?id=eq.${id}`);
    console.log('Post recebido:', data);
    
    if (data && data.length > 0) {
      return data[0];
    }

    return null;
  } catch (error) {
    console.error('Erro ao buscar post:', error.message);
    console.error('Detalhes:', error.response?.data);
    return null;
  }
}