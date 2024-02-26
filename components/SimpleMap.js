import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { View } from "react-native-web";
import { StyleSheet, Text } from "react-native";

const defaultLocation = { lat: 34.0522, lng: -118.2437 };

// const AnyReactComponent = ({ text ,onClick }) => <div style={styles.wrapper} onClick={onClick} alt={text}>

//     <Text>{text}</Text>
//     </div>;

const AnyReactComponent = ({ text }) => (
    <View style={styles.wrapper}>

    </View>
);

const MyComponent = () => {
    return (
        <div>
            {/* Component content */}
        </div>
    );
};

export default function SimpleMap() {
    const [places, setPlaces] = useState([]);

    // const fetchPlaces = async () => {
    //     fetch('places.json')
    //         .then((response) => response.json())
    //         .then((data) => setPlaces(data.results));
    // };

    // useEffect(() => {
    //     fetchPlaces();
    // }, []);

    // if (!places || places.length === 0) {
    //     return null;
    // }

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <View style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {/* {places.map((place) => (
                    <AnyReactComponent
                        key={place.id}
                        text={place.name}
                        lat={place.geometry.location.lat}
                        lng={place.geometry.location.lng}
                    />
                ))} */}
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                /> */}
                <MyComponent/>
            </GoogleMapReact>
        </View>
    );
}


const styles = StyleSheet.create({
    control: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '18px',
        height: '18px',
        backgroundColor: '#000',
        border: '2px solid #fff',
        borderRadius: '100%',
        userSelect: 'none',
        //         transform: translate(-50 %, -50 %),
        //         cursor: ${(props) => (props.onClick ? 'pointer' : 'default')},
        //   &:hover {
        //     z - index: 1,
        //   }
    },
});