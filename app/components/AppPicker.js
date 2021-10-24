import React, {useState} from 'react';
import { 
    Modal,
    Button,
    FlatList,
    StyleSheet, 
    TouchableWithoutFeedback, 
    View,
} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickItems from './PickItems';

export default function AppPicker({
    icon,
    selectedItem,
    placeholder,
    items,
    onSelectItem,
}) {
    const [ ModalVisible, setModalVisible ] = useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={ () => setModalVisible(true) } >
            <View style={styles.better} >
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color="gray"
                />
                <View style={styles.texts}>
                    <AppText>
                        {selectedItem?selectedItem.label:placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={15}
                        color="white"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={ModalVisible} animationType="fade" >
            <Button title="CLOSE" onPress={ () => setModalVisible(false) } />
            <FlatList
                data={items}
                keyExtractor={ (item) => item.value.toString() }
                renderItem={ ({item}) => <PickItems
                    label={item.label}
                    onPress={ () =>{
                        setModalVisible(false);
                        onSelectItem(item);
                    }}
                />}
            />
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    better: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginVertical: 2,
        paddingVertical: 0,
        flexDirection: "row",
        marginLeft: 20,
        width: 150,
    },

    texts: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignSelf: "center",
    },
});
