import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type TGradientBorderProps = {
  children: JSX.Element;
  width: number;
  height: number;
  gradientColors?: string[];
  backgroundOpacity?: number;
  useAngle?: boolean;
  angle?: number;
};

const GradientBorder: React.FC<TGradientBorderProps> = ({
  children,
  width,
  height,
  gradientColors = ['orange', 'magenta'],
  backgroundOpacity = 1,
  useAngle = true,
  angle = 45,
}) => {
  const styles = StyleSheet.create({
    linearGradient: {
      height: height,
      width: width,
      borderRadius: 20 // <-- Outer Border Radius
    },
    innerContainer: {
      borderRadius: 18, // <-- Inner Border Radius
      margin: 2,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: backgroundOpacity
    }
  });
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      useAngle={useAngle}
      angle={angle}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.linearGradient}
    >
      <View style={styles.innerContainer}>
        {children}
      </View>
    </LinearGradient>
  );
};

export default GradientBorder;
