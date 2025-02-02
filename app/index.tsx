import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';


import { useRouter } from 'expo-router';

import { auth } from '@/utils/firebaseConfig';

import useStore from '@/hooks/store';


export default function Index() {
  const router = useRouter();
  const initializeStore = useStore((state: any) => state.initializeStore);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      
      if (user) {
        router.replace('/(tabs)');
      }else{
        router.replace('/onbording');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    initializeStore(); // Load persisted state
  }, []);

  
}

const styles = StyleSheet.create({});
