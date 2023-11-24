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
  outerBorderRadius?: number;
  innerBorderRadius?: number;
};

const GradientBorder: React.FC<TGradientBorderProps> = ({
  children,
  width,
  height,
  gradientColors = ['orange', 'magenta'],
  backgroundOpacity = 1,
  useAngle = true,
  angle = 45,
  outerBorderRadius = 20,
  innerBorderRadius = 18,
}) => {
  const styles = StyleSheet.create({
    linearGradient: {
      height: height,
      width: width,
      borderRadius: outerBorderRadius
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 2,
      backgroundColor: '#fff',
      opacity: backgroundOpacity,
      borderRadius: innerBorderRadius,
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
