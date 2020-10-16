import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Animated, StyleSheet, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

//imports the image cycle button
import ImageCycle from "../components/ImageCycle";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Movie = () => {
    //animation for the fade
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const isFocused = useIsFocused();
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        return () => fadeAnim.setValue(0);
    }, [fadeAnim, isFocused]);

    //lets you cycle between 2 images
    const [count, setCount] = useState(0);
    const [isOdd, setIsOdd] = useState(false);

    const onButtonPress = () => {
        Alert.alert("Button clicked!");
    };

    const countIncrementHandler = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        if (count % 2 === 0) {
            setIsOdd(true);
        } else {
            setIsOdd(false);
        }
    }, [count]);

    return (
        <ScrollView style={styles.mainContainer}>
            {/* header for Show */}
            <Header
                containerStyle={{
                    backgroundColor: "#18CCB8",
                }}
                centerComponent={{
                    text: "Favorite Movie",
                    style: {
                        color: "white",
                        fontSize: 24,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }
                }}
            />
            {/* main container for the content of Show */}
            <Animated.View
                style={{ opacity: fadeAnim, }
                }
            >
                <Text style={styles.showHeader}>Silver Linings Playbook</Text>
                <Image
                    style={styles.showImages}
                    source={
                        isOdd
                            ? require("../assets/images/silver-linings-playbook1.jpg")
                            : require("../assets/images/silver-linings-playbook2.jpg")
                    }
                />
                <ImageCycle countIncrementHandler={countIncrementHandler} />

                {/* subcontainer that talks about the premise of the show */}
                <View style={styles.showSubContainter}>
                    <Text style={styles.showSubheader}>The Premise</Text>
                    <Text style={styles.showText}>
                        After eight months' treatment in a mental health facility for bipolar disorder,
                        Patrizio "Pat" Solitano Jr. (Bradley Cooper) is released into the care of his father Patrizio Sr.
                        (Robert De Niro) and mother Dolores (Jacki Weaver) at his childhood home in Upper Darby, Pennsylvania.
                        His main focus is to reconcile with his ex-wife, Nikki (Brea Bee).
                        She has moved away and obtained a restraining order against him after Pat found her in the shower with another man and badly beat him.
                    </Text>
                </View>
                {/* subcontainer that talks about why I like the anime */}
                <View style={styles.showSubContainter}>
                    <Text style={styles.showSubheader}>Why I Love This Movie</Text>
                    <Text style={styles.showText}>
                        This movie is a tear jerker for me. Why? I find the potrayal of bipolar disorder pretty accurate.
                        That relatability has a special place in my heart, because it shows others a sort of "invisible" struggle many people face.
                        Though it's not entirely relatable, the other elements with family life, the pacing of the movie, and overall mood of the film really hits home.
                        It's something that stuck with me even after finishing the film long ago.
                    </Text>
                </View>
            </Animated.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
    },
    showImages: {
        width: windowWidth,
        height: windowHeight - 550,
        resizeMode: "contain",
    },
    showHeader: {
        fontSize: 36,
        fontWeight: "700",
        textAlign: "center",
        padding: 20,
        color: "#B25BAD",
    },
    showSubContainter: {
        padding: 20,
    },
    showSubheader: {
        fontSize: 28,
        color: "#B25BAD",
        paddingBottom: 10,
    },
    showText: {
        fontSize: 16,
        lineHeight: 23,
    },
});

export default Movie;