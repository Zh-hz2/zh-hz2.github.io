// ✅ 1️⃣ 导入 Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

// ✅ 2️⃣ 从 JSON 文件获取 Firebase 配置
async function loadFirebaseConfig() {
    const response = await fetch("assets/js/firebase-config.json");
    return await response.json();
}

// ✅ 3️⃣ 初始化 Firebase 并获取 Firestore 数据
async function fetchPosts() {
    const firebaseConfig = await loadFirebaseConfig();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "posts"));
    let postsContainer = document.getElementById("posts-list");

    querySnapshot.forEach(doc => {
        let post = doc.data();
        let postElement = document.createElement("li");
        postElement.innerHTML = `<a href="${post.url}" target="_blank">${post.title}</a> - ${post.date}`;
        postsContainer.appendChild(postElement);
    });
}

// ✅ 4️⃣ 执行函数
fetchPosts();
