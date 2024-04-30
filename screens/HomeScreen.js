import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation();
    return (
        <View>    
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Home Screenn</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Stack")}
            style={{
                backgroundColor: "purple",
                padding: 10,
                width:"50%",
                alignSelf: "center",
                textAlign: "center",
                marginTop: "20%"
            }}  
        >
            
            <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color:"white",
                }}
            >Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
    }
export default SettingsScreen;