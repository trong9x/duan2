// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAJ9dZW55b8WxF22cocPIB9bdsAGBHWi_k",
  authDomain: "quan-ly-may-det.firebaseapp.com",
  databaseURL: "https://quan-ly-may-det-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quan-ly-may-det",
  storageBucket: "quan-ly-may-det.firebasestorage.app",
  messagingSenderId: "661540513500",
  appId: "1:661540513500:web:181366e3e91dbb4a81f619",
  measurementId: "G-SKWC5T2XBM"
};
// Init app (tránh init nhiều lần)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 🔑 AUTH
window.auth = firebase.auth();

// 🗄️ REALTIME DATABASE (DÒNG BỊ THIẾU)
window.db = firebase.database();
