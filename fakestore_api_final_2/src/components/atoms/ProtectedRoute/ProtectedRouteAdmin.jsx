import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRouteAdmin = ({ children }) => {
  // Menggunakan fungsi useLocation dari react-router-dom untuk mendapatkan informasi tentang lokasi saat ini.
  let location = useLocation();

  // Memeriksa apakah ada data administrator yang tersimpan di Local Storage.
  if (!localStorage.getItem("admin")) {
    // Jika tidak ada data administrator (belum login), kita akan mengalihkan administrator ke halaman login.
    // Kami menggunakan komponen Navigate dari react-router-dom untuk melakukan pengalihan dengan memberikan lokasi saat ini sebagai "from" state.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Jika ada data administrator (sudah login), maka kita akan menampilkan konten yang dilindungi dengan menggunakan prop "children".
  // Prop "children" akan berisi konten yang ingin ditampilkan ketika administrator memiliki hak akses.
  return children;
};

export default ProtectedRouteAdmin;
