import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRouteUser = ({ children }) => {
  // Menggunakan fungsi useLocation dari react-router-dom untuk mendapatkan informasi tentang lokasi saat ini.
  let location = useLocation();

  // Memeriksa apakah ada data pengguna yang tersimpan di Local Storage.
  if (!localStorage.getItem("user")) {
    // Jika tidak ada data pengguna (belum login), kita akan mengalihkan pengguna ke halaman login.
    // Kami menggunakan komponen Navigate dari react-router-dom untuk melakukan pengalihan dengan memberikan lokasi saat ini sebagai "from" state.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Jika ada data pengguna (sudah login), maka kita akan menampilkan konten yang dilindungi dengan menggunakan prop "children".
  // Prop "children" akan berisi konten yang ingin ditampilkan ketika pengguna memiliki hak akses.
  return children;
};

export default ProtectedRouteUser;
