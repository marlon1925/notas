import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { getGrade } from "../service/GradeServices";
import { Avatar, FAB, ListItem } from "@rneui/base";
import { useState } from "react";

export const ListGrade = ({ navigation }) => {
    const [time, setTime] = useState();

    const refreshList = () => {
        setTime(new Date().getTime());
    }

    const ItemGrade = ({ nota }) => {
        return <TouchableHighlight onPress={() => {
            navigation.navigate("GradeFromNav", { notita: nota, fnRefresh: refreshList });
        }}>
            <ListItem bottomDivider>
                <Avatar
                    title={nota.subject.substring(0, 1)}
                    containerStyle={{ backgroundColor: '#6733B9' }}
                    rounded
                />
                <ListItem.Content>
                    <ListItem.Title>
                        {nota.subject}
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title>
                        {nota.grade}
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </TouchableHighlight>



    }
    return <View style={styles.container}>
        <FlatList
            data={getGrade()}
            renderItem={({ item }) => {
                return <ItemGrade nota={item} />
            }}
            keyEstractor={(item) => { return item.subject }}
            extraData={time}
        />

        <FAB
            title=" + "
            placement="right"
            onPress={() => { navigation.navigate('GradeFromNav', { notita: null, fnRefresh: refreshList }) }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});