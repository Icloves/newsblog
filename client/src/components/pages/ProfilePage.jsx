import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriCard from '../ui/FavoriCard';

export default function ProfilePage() {
  const [favorites, setFavorites] = useState([]);

  const fetchingData = async () => {
    const res = await axios.get('/api/profile');
    setFavorites(res.data);
  };
  useEffect(() => {
    fetchingData();
  }, []);

    // const deleteHandler = async (favoritesId) => {
    //   const res = await axiosInstance.delete(`/messages/${favoritesId}`);
    //   if (res.status === 204) {
    //     setFavorites((prev) => prev.filter((el) => el.id !== favoritesId));
    //   }
    // };

  return (
    <div>
      {favorites.map((fav) => (
        <FavoriCard key={fav.id} fav={fav} />
      ))}
    </div>
  );
}
