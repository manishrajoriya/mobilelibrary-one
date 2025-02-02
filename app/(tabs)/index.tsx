import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sidebar from '@/component/Sidebar';
import Toast from 'react-native-toast-message';


const Index = () => {

  return (
    <>
      <Sidebar />
      <Toast/>
      </>
  );
}

const styles = StyleSheet.create({})

export default Index;
