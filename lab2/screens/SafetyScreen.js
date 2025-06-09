import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Tabs from '../components/Tabs';
import AnimatedProgressBar from '../components/guardComponents/AnimatedProgressBar';
import { useTheme } from '@react-navigation/native';
import sampleTabsStyles from '../styles/sampleTabsStyles';
import getSafetyStyles from '../styles/safetyStyles';
import { TABS } from '../mock/safetyTabs';

const CODE_LENGTH = 5;
const INTERVAL_SECONDS = 30;

const generateCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const SafetyScreen = () => {
  const [activeTab, setActiveTab] = useState('guard');
  const [code, setCode] = useState(generateCode());
  const [secondsLeft, setSecondsLeft] = useState(INTERVAL_SECONDS);

  const progressAnimation = useRef(new Animated.Value(1)).current;

  const { colors } = useTheme();

  const mainStyles = sampleTabsStyles(colors);
  const styles = getSafetyStyles(colors);

  const startCodeTimer = useCallback(() => {
    progressAnimation.setValue(1);
    Animated.timing(progressAnimation, {
      toValue: 0,
      duration: INTERVAL_SECONDS * 1000,
      useNativeDriver: false,
    }).start();

    setCode(generateCode());
    setSecondsLeft(INTERVAL_SECONDS);
  }, [progressAnimation]);

  useEffect(() => {
    startCodeTimer();

    const codeRefreshInterval = setInterval(startCodeTimer, INTERVAL_SECONDS * 1000);

    const secondCountdownInterval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    return () => {
      clearInterval(codeRefreshInterval);
      clearInterval(secondCountdownInterval);
    };
  }, [startCodeTimer]);

  return (
    <View style={styles.container}>
      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} styles={mainStyles} />

      {activeTab === 'guard' && (
        <>
          <Text style={styles.loggedIn}>Вхід як гравець</Text>
          <Text style={styles.code}>{code}</Text>
          <AnimatedProgressBar progress={progressAnimation} styles={styles} />
          <Text style={styles.timerText}>{secondsLeft} сек</Text>
          <Text style={styles.infoText}>
            Ви повинні вводити свій код кожного разу, коли вводите свій пароль для входу в свій Steam аккаунт.
          </Text>
          <Text style={styles.tipText}>
            Поради: Якщо ви не ділитеся своїм комп'ютером, ви можете вибрати "Запам'ятати пароль" при вході в PC-клієнт, щоб вводити свій пароль та код автентифікатора рідше.
          </Text>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Remove Authenticator</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>My Recovery Code</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Help</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {activeTab === 'confirm' && (
        <Text style={styles.menuText}>
          Тут буде контент для підтвердження.
        </Text>
      )}
    </View>
  );
};

export default SafetyScreen;