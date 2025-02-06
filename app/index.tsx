import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { auth } from "@/utils/firebaseConfig";
import useStore from "@/hooks/store";

export default function Index() {
  const router = useRouter();
  const initializeStore = useStore((state: any) => state.initializeStore);
  const activeLibrary = useStore((state: any) => state.activeLibrary);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && activeLibrary?.id) {
        router.replace("/(tabs)"); // Navigate to main app
      } else if (user && !activeLibrary?.id) {
        router.replace("/addLibrary"); // Navigate to add library
      } else {
        router.replace("/onbording"); // Navigate to onboarding
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    initializeStore(); // Load persisted state
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6B46C1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
