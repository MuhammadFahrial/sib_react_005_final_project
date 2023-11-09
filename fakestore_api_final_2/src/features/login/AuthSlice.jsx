import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// State awal untuk slice otentikasi
const initialState = {
  isLoginPending: false, // Menandakan status apakah proses login sedang berlangsung atau tidak
  isLoginSuccess: false, // Menandakan apakah login berhasil atau tidak
  errorMessage: "", // Menyimpan pesan error jika terjadi kesalahan saat login
};

// Fungsi yang meniru pemanggilan API untuk login
const callLoginApi = (email, password) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === "admin@login.com" && password === "admin") {
        resolve({ email });
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        reject("Invalid email and password");
      }
    }, 500);
  });
};

// Tindakan asinkron untuk melakukan login
export const authLoginApi = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await callLoginApi(email, password);
      return response; // Mengembalikan data email pengguna yang berhasil login
    } catch (err) {
      throw err; // Melemparkan pesan error jika login gagal
    }
  }
);

// Slice Redux untuk otentikasi
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}, // Tidak ada reducer tambahan, karena kita hanya menggunakan createAsyncThunk
  extraReducers(builder) {
    // Menggunakan extra reducers untuk menangani status login yang berubah berdasarkan hasil tindakan asinkron authLoginApi
    builder
      .addCase(authLoginApi.pending, (state) => {
        state.isLoginPending = true; // Mengatur status login menjadi sedang berlangsung (true) saat tindakan login dimulai
        state.isLoginSuccess = false; // Setel isLoginSuccess menjadi false saat tindakan login dimulai
        state.errorMessage = ""; // Hapus pesan error jika ada sebelumnya
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log(action);
        const { email } = action.payload; // Mendapatkan data email pengguna yang berhasil login dari action.payload
        state.isLoginPending = false; // Setel status login menjadi tidak sedang berlangsung (false) karena login berhasil
        state.isLoginSuccess = true; // Setel isLoginSuccess menjadi true karena login berhasil
        state.user = { email }; // Simpan data email pengguna yang berhasil login di state
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        console.log(action, "rejected");
        state.isLoginPending = false; // Setel status login menjadi tidak sedang berlangsung (false) karena login gagal
        state.isLoginSuccess = false; // Setel isLoginSuccess menjadi false karena login gagal
        state.errorMessage = action.error.message; // Simpan pesan error yang didapatkan dari action.error.message
      });
  },
});

export default authSlice.reducer;
