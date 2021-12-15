import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, FlatList, PixelRatio, StyleSheet, Text, View} from 'react-native';
import CountryPickerModal from "./country-picker-modal";
import {Country} from "react-native-country-picker-modal";

export default function App() {
    const [selectedCountry, setSelectedCountry] = React.useState<null | Country>(null);
    const [showCountryPickerModal, setShowCountryPickerModal] = React.useState(false);
    const onCountrySelected = React.useCallback((country: Country) => {
        setSelectedCountry(country);
    }, [setSelectedCountry]);
    return (
        <React.Fragment>
            <StatusBar style="auto"/>
            <View style={styles.headerSpace}>
                <Button title={'Select Country'} onPress={() => {
                    setShowCountryPickerModal(true);
                }}/>
                <Text>Selected country: {selectedCountry?.name}</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={[]}
                    renderItem={({item}) => null}
                    ListEmptyComponent={
                        <View>
                            {selectedCountry !== null && (
                                <React.Fragment>
                                    <Text style={styles.data}>
                                        {JSON.stringify(selectedCountry, null, 2)}
                                    </Text>
                                </React.Fragment>
                            )}
                        </View>
                    }
                />
            </View>
            <CountryPickerModal
                {...{onCountrySelected, setShowCountryPickerModal, showCountryPickerModal}}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerSpace: {
        maxHeight: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    data: {
        maxWidth: 250,
        padding: 10,
        marginTop: 7,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1 / PixelRatio.get(),
        color: '#777',
    },
});
