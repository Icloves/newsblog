import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriCard from '../ui/FavoriCard';
import axiosInstance from '../../axiosInstance';

export default function ProfilePage({user}) {
  const [favorites, setFavorites] = useState([]);

  const fetchingData = async () => {
    try {
      const res = await axios.get('/api/profile');
      setFavorites(res.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    axiosInstance
      .get('/profile')
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
        fetchingData(); // Повторный вызов для обновления данных
      });
  }, []);

  const deleteHandler = async (e, favorite) => {
    e.preventDefault();
    const res = await axiosInstance.delete(`/profile/${favorite.id}`);
    if (res.status === 200) {
      setFavorites((prev) => prev.filter((msg) => msg.id !== favorite.id));
      localStorage.setItem(`saved_${favorite.title}`, false);
    }
  };

  return (
    <div>
      {favorites.map((fav) => (
        <FavoriCard key={fav.id} fav={fav} deleteHandler={deleteHandler} user={user}/>
      ))}
    </div>
  );
}
