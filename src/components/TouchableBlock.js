/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';

const shadowProps = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

const TouchableBlock = ({
  absolute,
  children,
  center,
  right,
  middle,
  bottom,
  border,
  m,
  ml,
  mr,
  mt,
  mb,
  mv,
  mh,
  p,
  pl,
  pr,
  pt,
  pb,
  pv,
  ph,
  row,
  flex,
  width,
  w100,
  height,
  h100,
  style,
  br,
  borderColor,
  bg,
  elevation,
  absBottom,
  absTop,
  absLeft,
  absRight,
  overflow,
  spaced,
  z,
  flexwrap,
  ratio,
  shadow,
  onPress = () => {},
  disabled,
  opacity,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled || null}
    style={{
      // position
      flex: flex || null,
      flexWrap: flexwrap || null,
      aspectRatio: ratio || null,
      flexDirection: row ? 'row' : 'column',
      justifyContent: middle
        ? 'center'
        : bottom
        ? 'flex-end'
        : spaced
        ? 'space-between'
        : null,
      alignItems: center ? 'center' : right ? 'flex-end' : null,
      // view
      zIndex: z || null,
      position: absolute ? 'absolute' : null,
      top: absTop || null,
      bottom: absBottom || null,
      left: absLeft || null,
      right: absRight || null,
      width: w100 ? '100%' : width || null,
      height: h100 ? '100%' : height || null,
      backgroundColor: bg || '',
      overflow: overflow || null,
      opacity: opacity || null,
      // Border
      borderWidth: border || null,
      borderRadius: br || null,
      borderColor: borderColor || 'grey',
      elevation: elevation || null,
      // margin
      margin: m || null,
      marginLeft: ml || null,
      marginTop: mt || null,
      marginBottom: mb || null,
      marginRight: mr || null,
      marginVertical: mv || null,
      marginHorizontal: mh || null,
      // padding
      padding: p || null,
      paddingLeft: pl || null,
      paddingRight: pr || null,
      paddingTop: pt || null,
      paddingBottom: pb || null,
      paddingHorizontal: ph || null,
      paddingVertical: pv || null,
      ...(shadow ? shadowProps : null),
      ...style,
    }}>
    {children}
  </TouchableOpacity>
);

export default TouchableBlock;
