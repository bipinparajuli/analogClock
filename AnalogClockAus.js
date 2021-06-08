import React, { useState,useEffect } from 'react';
import { Image, View,StyleSheet } from 'react-native';
import moment from 'moment'


export default function AnalogClockAus (){
    let d = new Date()
    // .toLocaleString("en-US",{timeZone:"Australia/Sydney",timeStyle:"medium"})
    
    let currentDate = d.getHours();
        d.setHours(currentDate+4)

        
    const [state,setState] = useState({


      sec:d.getSeconds() * 6,

      min: (d.getMinutes() + 15) * 6 + (d.getSeconds() * 6) / 60,

hour: ((d.getHours() % 12)/ 12) * 360 + 90 +
        (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12    
})




  useEffect(()=>{

 setInterval(() => {
        let d = new Date();
        let currentDate = d.getHours();
        d.setHours(currentDate+4)

        



        setState({sec: d.getSeconds() * 6});
        setState({min: (d.getMinutes() + 15) * 6 +(d.getSeconds() * 6) / 60});
        setState({hour: ((d.getHours() % 12)/ 12) * 360 + 90 +
          (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12});
      }, 1000);

    // clearInterval(timer);
  },[]) 


  
  

  const styles = StyleSheet.create({
    clockFrame: {
          width: 270,
          height: 270,
          position: 'relative',
          borderColor: 'black',
          borderWidth: 7,
          borderRadius: 270/2
        },
    
      clockHolder: {
          width: 270,
          height: 270,
          position: 'absolute',
          right: -7,
          bottom: -7
        },
    
      clockFace: {
          width: 15,
          height: 15,
          backgroundColor: "black",
          borderRadius: 15 / 2,
          top: (270 - 15) / 2,
          left: (270 - 15) / 2
        },
    
      hourHandStyles: {
          width: 0,
          height: 0,
          position: 'absolute',
          backgroundColor: "black",
          top: 270/2,
          left: 270/2,
          marginVertical: -5.5,
          marginLeft: -70/2,
          paddingVertical: 5.5,
          paddingLeft: 70,
          borderTopLeftRadius: true ?
                               5.5 : 0,
          borderBottomLeftRadius: true ?
                                  5.5 : 0
        },
    
      minuteHandStyles: {
          width: 0,
          height: 0,
          position: 'absolute',
          backgroundColor: "black",
          top: 270/2,
          left: 270/2,
          marginTop: -(100/2),
          marginHorizontal: -5,
          paddingTop: 100,
          paddingHorizontal: 5,
          borderTopLeftRadius: true ?
                               5 : 0,
          borderTopRightRadius: true ?
                                5 : 0
        },
    
      secondHandStyles: {
          width: 0,
          height: 0,
          position: 'absolute',
          backgroundColor: 'black',
          top: 270/2,
          left: 270/2,
          marginTop: -(120/2),
          marginHorizontal: -2,
          paddingTop: 120,
          paddingHorizontal: 2,
          borderTopLeftRadius: false ?
                               2 : 0,
          borderTopRightRadius: false ?
                                2 : 0
        }
    
  })
  
    return (
      <View style={ styles.clockFrame }>
        {/* Uncomment for background image */}
        <Image
          style={{width: 270 - 7*2,
            height: 270 - 7*2}}
          resizeMode='stretch'
          source={require('./img/clockBack.png')}
        />
       

        <View style={ styles.clockHolder }>

          <View style={[ styles.hourHandStyles,
            {transform:[{ rotate: (state.hour) + 'deg' },
            {translateX: -(0 +
                           70/2) }]}]}
          />

          <View style={[ styles.minuteHandStyles,
            {transform:[{ rotate:( state.min) + 'deg' },
            { translateY: -(0 +
                            100/2) }]}]}
          />

          <View style={[ styles.secondHandStyles,
            {transform:[{ rotate: state.sec + 'deg' },
            {translateY: -(0 +
                           120/2) }]}]}
          />

          <View style={ styles.clockFace }/>

        </View>
      </View>
    )
  };

