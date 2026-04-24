# 💪 Ejaz Fitness

**Ejaz Fitness** is a clean and intuitive mobile fitness tracking app built with **Expo** and **React Native**. It’s designed to help users manage workouts, discover exercises, stay motivated, and customize their routine with ease.

---

## 🚀 Features

- 🏠 **Home Screen** — Explore a curated list of exercises  
- 📖 **Exercise Details** — View images and descriptions for each exercise  
- ➕ **Add Exercise** — Create your own exercises with image upload support  
- ✅ **Completed Workouts** — Keep track of finished activities  
- 💬 **Motivational Quotes** — Get inspired with uplifting quotes  
- 👨‍💻 **About Developer** — Access portfolio, LinkedIn, and GitHub links  
- 🎨 **Modern UI** — Designed with the **LUNA color palette**

---

## 🛠 Tech Stack

- ⚛️ React Native  
- 🚀 Expo  
- ⚛️ React  
- 🖼 Expo Image Picker  
- 🎯 React Native Vector Icons  

---

## 📁 Project Structure

```
Ejaz-Fitness/
│
├── App.js               # App navigation and state management
├── components/         # Screens and reusable UI components
├── assets/             # Images, icons, and static files
├── eas.json            # Expo build configuration
└── package.json
```

---

## ⚡ Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run the App

```bash
npm start
```

After starting, choose how you want to run the app:

- 📱 Scan the QR code using **Expo Go**  
- 🤖 Press `a` to launch on Android  
- 🍎 Press `i` to run on iOS (Mac only)  
- 🌐 Press `w` to open in a browser  

---

## 🏗 Build with EAS

This project uses **Expo Application Services (EAS)** for building apps.

### Install EAS CLI

```bash
npm install -g eas-cli
```

### Login to Expo

```bash
eas login
```

### Configure the Project

```bash
eas build:configure
```

### Build Variants

#### 🔧 Development

```bash
eas build --profile development --platform android
```

#### 👀 Preview

```bash
eas build --profile preview --platform android
```

#### 🚀 Production

```bash
eas build --profile production --platform android
```

👉 Switch `android` to `ios` for iOS builds.

---

## 📦 GitHub Submission Guidelines

1. Push your complete project to a GitHub repository  
2. Make sure to include:
   - Source code  
   - `package-lock.json`  
   - `eas.json`  
3. Share your repository link  
4. Upload a zipped version if required (e.g., Google Classroom)

---

## 📝 Notes

- 🌐 The app uses **remote images** for exercises and quotes  
- 🖼 Profile image path:  
  `assets/About screen image/Profile 1.png`  
- ⚠️ If asset names are changed, update the import paths accordingly  

---

## 📱 App Screens

- 🏠 Home Screen  
- 📖 Exercise Details  
- ➕ Add Exercise  
- ✅ Completed Workouts  
- 💬 Motivational Quotes  
- 👨‍💻 About Developer  

---

## 🌟 Future Improvements

- 🔐 User authentication  
- 📊 Progress tracking & analytics  
- ☁️ Cloud integration (Firebase / Supabase)  
- 🎯 Personalized workout recommendations  

---

## 🤝 Contributing

Feel free to contribute! Fork the repo, open issues, or submit pull requests.

---

## 📄 License

Licensed under the **MIT License**.

---

💥 *Stay consistent. Stay focused. Build your fitness journey with Ejaz Fitness.*
