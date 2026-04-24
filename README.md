# 💪 Ejaz Fitness

**Ejaz Fitness** is a sleek and user-friendly mobile fitness tracker built using **Expo** and **React Native**. It helps users stay on top of their workouts, explore exercises, stay motivated, and even personalize their fitness journey by adding custom exercises.

---

## 🚀 Features

- 🏠 **Home Screen** — Browse a list of fitness exercises  
- 📖 **Exercise Details** — View exercise images and descriptions  
- ➕ **Add Exercise** — Create custom exercises with device image upload  
- ✅ **Completed Workouts** — Track your finished exercises  
- 💬 **Motivational Quotes** — Stay inspired with curated quotes  
- 👨‍💻 **About Developer** — Quick access to portfolio, LinkedIn, and GitHub  
- 🎨 **Modern UI** — Styled using the **LUNA color palette**

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
├── App.js                # Main app navigator and global state
├── components/          # Reusable screens & UI components
├── assets/              # Images, icons, and profile assets
├── eas.json             # Expo Application Services config
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

Then choose your preferred platform:

- 📱 Scan QR code with **Expo Go**
- 🤖 Press `a` → Open Android emulator/device  
- 🍎 Press `i` → Open iOS simulator (Mac only)  
- 🌐 Press `w` → Open in browser  

---

## 🏗 Build with EAS

This project is configured for **Expo Application Services (EAS)** builds.

### Install EAS CLI

```bash
npm install -g eas-cli
```

### Login to Expo

```bash
eas login
```

### Configure Project

```bash
eas build:configure
```

### Create Builds

#### 🔧 Development Build

```bash
eas build --profile development --platform android
```

#### 👀 Preview Build

```bash
eas build --profile preview --platform android
```

#### 🚀 Production Build

```bash
eas build --profile production --platform android
```

👉 Replace `android` with `ios` for iPhone builds.

---

## 📦 GitHub Submission Guidelines

1. Push the complete project to a GitHub repository  
2. Include:
   - Source code  
   - `package-lock.json`  
   - `eas.json`  
3. Share the repository link  
4. Upload a zipped project folder if required (e.g., Google Classroom)

---

## 📝 Notes

- 🌐 Uses **remote images** for starter exercises and quotes  
- 🖼 Developer profile image stored at:  
  `assets/About screen image/Profile 1.png`  
- ⚠️ If you rename assets, update the import paths in components accordingly  

---

## 📝 App Screens 

- 🌐 Uses **remote images** for starter exercises and quotes  
- 🖼 Developer profile image stored at:  
  `assets/About screen image/Profile 1.png`  
- ⚠️ If you rename assets, update the import paths in components accordingly  

---

## 🌟 Future Improvements (Optional Ideas)

- 🔐 User authentication  
- 📊 Workout analytics & progress charts  
- ☁️ Cloud data storage (Firebase / Supabase)  
- 🎯 Personalized workout plans  

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, open issues, or submit pull requests.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

💥 *Stay consistent. Stay strong. Build your best self with Ejaz Fitness!*
