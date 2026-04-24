import { StatusBar } from 'expo-status-bar';

import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
} from 'react-native';

import CompletedScreen from './components/CompletedScreen';
import DetailScreen from './components/DetailScreen';
import AddExerciseScreen from './components/AddExerciseScreen';
import HomeScreen from './components/HomeScreen';
import QuotesScreen from './components/QuotesScreen';
import BottomTab from './components/BottomTab';
import AboutDeveloperScreen from './components/AboutDeveloperScreen';
import { LUNA, starterExercises, quoteFallbacks, blankForm } from './components/data';

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedExercise, setSelectedExercise] = useState(starterExercises[0]);
  const [exercises, setExercises] = useState(starterExercises);
  const [completedIds, setCompletedIds] = useState(['2']);
  const [quote, setQuote] = useState(quoteFallbacks[0]);
  const [form, setForm] = useState(blankForm);

  useEffect(() => {
    let isActive = true;

    async function loadQuote() {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const pool = Array.isArray(data) && data.length > 0 ? data : quoteFallbacks.map((text) => ({ text }));
        const pick = pool[Math.floor(Math.random() * pool.length)];
        if (isActive) {
          setQuote(pick.text || quoteFallbacks[0]);
        }
      } catch {
        if (isActive) {
          setQuote(quoteFallbacks[Math.floor(Math.random() * quoteFallbacks.length)]);
        }
      }
    }

    loadQuote();

    return () => {
      isActive = false;
    };
  }, []);

  const completedExercises = useMemo(
    () => exercises.filter((exercise) => completedIds.includes(exercise.id)),
    [completedIds, exercises],
  );

  const completedCount = completedIds.length;
  const totalCount = exercises.length;

  const navigateToDetail = (exercise) => {
    setSelectedExercise(exercise);
    setScreen('detail');
  };

  const toggleCompleted = (exerciseId) => {
    setCompletedIds((current) =>
      current.includes(exerciseId)
        ? current.filter((id) => id !== exerciseId)
        : [...current, exerciseId],
    );
  };

  const handleAddExercise = () => {
    const name = form.name.trim();
    const target = form.target.trim();
    const duration = form.duration.trim();
    const calories = form.calories.trim();
    const description = form.description.trim();

    if (!name || !target || !duration || !calories || !description) {
      Alert.alert('Missing details', 'Please fill out every field before adding your exercise.');
      return;
    }

    const newExercise = {
      id: String(Date.now()),
      name,
      target,
      duration,
      calories,
      description,
      image:
        form.image.trim() ||
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    };

    setExercises((current) => [newExercise, ...current]);
    setSelectedExercise(newExercise);
    setForm(blankForm);
    setScreen('detail');
  };

  const activeScreen = {
    home: (
      <HomeScreen
        exercises={exercises}
        completedCount={completedCount}
        totalCount={totalCount}
        completedIds={completedIds}
        onExercisePress={navigateToDetail}
        onToggleCompleted={toggleCompleted}
        onAddPress={() => setScreen('add')}
        onQuotePress={() => setScreen('quotes')}
      />
    ),
    detail: (
      <DetailScreen
        exercise={selectedExercise}
        completed={completedIds.includes(selectedExercise.id)}
        onBack={() => setScreen('home')}
        onToggleCompleted={toggleCompleted}
      />
    ),
    add: (
      <AddExerciseScreen
        form={form}
        onBack={() => setScreen('home')}
        onChangeField={(field, value) => setForm((current) => ({ ...current, [field]: value }))}
        onSave={handleAddExercise}
        onQuotePress={() => setScreen('quotes')}
      />
    ),
    completed: (
      <CompletedScreen
        exercises={completedExercises}
        onBack={() => setScreen('home')}
        onExercisePress={navigateToDetail}
      />
    ),
    quotes: (
      <QuotesScreen
        quote={quote}
        onBack={() => setScreen('home')}
        onRefresh={() => setQuote(quoteFallbacks[Math.floor(Math.random() * quoteFallbacks.length)])}
      />
    ),
    about: (
      <AboutDeveloperScreen onBack={() => setScreen('home')} />
    ),
  }[screen];

  return (
    <View style={styles.appShell}>
      <StatusBar style="dark" backgroundColor={LUNA.light} />
      {activeScreen}

      <View style={styles.bottomBar}>
        <BottomTab icon="home-outline" label="Home" active={screen === 'home'} onPress={() => setScreen('home')} />
        <BottomTab icon="checkmark-done-outline" label="Done" active={screen === 'completed'} onPress={() => setScreen('completed')} />
        <BottomTab icon="add-circle" label="Add" active={screen === 'add'} onPress={() => setScreen('add')} />
        <BottomTab icon="person-outline" label="About" active={screen === 'about'} onPress={() => setScreen('about')} />
        <BottomTab icon="sparkles-outline" label="Quotes" active={screen === 'quotes'} onPress={() => setScreen('quotes')} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appShell: {
    flex: 1,
    backgroundColor: LUNA.light,
  },
  bottomBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: LUNA.midnight,
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
});

export default App;
