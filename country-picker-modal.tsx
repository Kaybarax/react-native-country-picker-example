import React from 'react';
import RN from 'react-native';
import CountryPicker, {Country, CountryCode} from 'react-native-country-picker-modal';

export default function CountryPickerModal(props: {
    onCountrySelected?: Function
    showCountryPickerModal: boolean
    setShowCountryPickerModal: (arg: boolean) => void
}) {
    console.log('CountryPickerModal props', props);

    let {onCountrySelected, showCountryPickerModal, setShowCountryPickerModal} = props;

    const [countryCode, setCountryCode] = React.useState<CountryCode>('DE');
    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        onCountrySelected && onCountrySelected(country);
    };

    return (
        <RN.Modal visible={showCountryPickerModal} animationType={'slide'} style={styles.container}>
            <CountryPicker
                {...{countryCode, onSelect,}}
                visible={false}
                withModal={false}
                onClose={() => {
                    setShowCountryPickerModal(false)
                }}
            />
        </RN.Modal>
    );
}

const styles = RN.StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
