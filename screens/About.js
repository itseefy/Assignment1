import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

//gets the window width and height
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function About({ navigation }) {
    return (
        //header container for the page
        <View style={styles.container}>
            <Header
                containerStyle={{
                    backgroundColor: "#18CCB8",
                }}
                centerComponent={{
                    text: "About this app",
                    style: {
                        color: "white",
                        fontSize: 24,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }
                }}
            />
            {/* container of the main content */}
            <View style={styles.contentContainer}>
                <Text style={[styles.textTitle]}>So, what is this?</Text>
                <Image
                    style={styles.aboutImage}
                    source={require("../assets/images/question-mark.png")}
                />
                <Text style={styles.text}>
                    Over the summer, I spent a good amount of time watching stuff.
                    This app highlights three different things I've watched.
                    Those three cover three genres: a show, an anime, and a movie.
                </Text>
                <Text style={styles.text}>
                    Each page will briefly outline the plot and display some pictures.
                    To get started, please press the "Get Started" button at the bottom.
                </Text>
            </View>
            {/* container for the bottom of the page */}
            <View style={styles.buttonContainer}>
                {/* this button navigates to the "Show" page */}
                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={() =>
                        navigation.navigate("Show", {
                            itemId: 100,
                        })
                    }
                >
                    <Text style={styles.buttonText}>Get Started Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        padding: 20,
        width: windowWidth - 10,
        margin: "auto",
    },
    textTitle: {
        color: "#B25BAD",
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center",
        padding: 20,
    },
    contentContainer: {
        flex: 1,
    },
    aboutImage: {
        width: windowWidth - 20,
        height: "30%",
        resizeMode: "contain",
        marginBottom: 30,
    },
    buttonContainer: {
        width: "100%",
    },
    getStartedButton: {
        backgroundColor: "#FF47F3",
        padding: 15,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        textTransform: "uppercase",
    }
});