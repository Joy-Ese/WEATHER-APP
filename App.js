import React from 'react';
import { StatusBar, View, StyleSheet, Platform, Image, Text, } from 'react-native';

import AppPicker from './app/components/AppPicker';

import Cities from './app/components/Cities';
import Gallery from './app/components/Gallery';
import Included from './app/components/Included';
import Ratings from './app/components/Ratings';
import Reviews from './app/components/Reviews';

import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <Cities/>
      <Included/>
      <Ratings/>
      <Reviews/>
      <Gallery/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});
