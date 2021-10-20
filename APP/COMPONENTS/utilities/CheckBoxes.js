import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckItem from './checkItems';

const gender = [
    {name: 'Male', active : 2 },
    {name: 'Female', active : 1 }
]

function CheckBoxes({sexChecker}) {
    const [stateGender, setStateGender] = useState();
    const [active, setActive] = useState(1)

    useEffect(() => {
        setStateGender(gender);
        sex('Male')
    },[]);

    const sex = (sexVar) => {
        sexChecker(sexVar)
    }

    const onPress = (num) => {
       if(active === 1 && num === 1){
           setActive(2);
           sexChecker('Female')
       }else if(active === 2 && num ===2){
           setActive(1);
           sexChecker('Male')
       }
    }

    return (
        <View style={styles.container}>
            { stateGender ? stateGender.map(item => (
                <CheckItem key={item.name} name={item.name} activ={active === item.active ? true : false} onPress={() => onPress(item.active)} />
            )) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center'
    }
})

export default CheckBoxes;