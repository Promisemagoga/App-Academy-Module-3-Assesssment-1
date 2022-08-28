import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import ServiceList from './Home/serviceList';
import Loader from './Loder';





const Details = () => {
  const companies = ServiceList
  let refCorousal = null
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      console.log(location);
    })();
  }, []);

  const RenderMarker = () => {
    return (
      <View>
        {
          companies.map((marker, index) => {
            // console.log(marker.coord);
            return (
              <Marker
                key={index}
                coordinate={{ latitude: marker.coord['latitude'], longitude: marker.coord['longitude'] }}
                title={marker.name}
              />
            )
          })
        }
      </View>




    )
  }

  const renderCard = () => {
    return (
      companies.map(() => {
        <View>

        </View>
      })

    )
  }

  return (

    <View style={styles.container}>
      {companies != null
        ? <View>
          <MapView style={styles.map}

            initialRegion={{
              latitude: -25.746,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          >

             <RenderMarker />

          </MapView>

          {/*<Carousel
          //  ref={(c) => { refCorousal = c; }}
           // data={companies.entries}
           // renderItem={renderCard}
          // sliderWidth={sliderWidth}
          // itemWidth={itemWidth}
          />*/}
        </View>


        : <Loader></Loader>
      }

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  map: {
    
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default Details;