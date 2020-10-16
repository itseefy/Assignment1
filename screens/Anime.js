import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Animated, StyleSheet, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

//imports the image cycle button
import ImageCycle from "../components/ImageCycle";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Anime = () => {
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
                    text: "Favorite Anime",
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
                <Text style={styles.showHeader}>One Piece</Text>
                <Image
                    style={styles.showImages}
                    source={
                        isOdd
                            ? require("../assets/images/one-piece-1.jpg")
                            : require("../assets/images/one-piece-2.jpeg")
                    }
                />
                <ImageCycle countIncrementHandler={countIncrementHandler} />

                {/* subcontainer that talks about the premise of the show */}
                <View style={styles.showSubContainter}>
                    <Text style={styles.showSubheader}>The Premise</Text>
                    <Text style={styles.showText}>
                        The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.
                        In an effort to organize his own crew, the Straw Hat Pirates, Luffy rescues and befriends a swordsman named Roronoa Zoro, and they head off in search of the One Piece.
                        They are joined in their journey by Nami, a navigator and thief; Usopp, a sniper and a pathological liar; and Vinsmoke Sanji, a womanizing chef.
                        They acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the East Blue.
                        As Luffy and his crew set out on their adventures, others join the crew later in the series, including Tony Tony Chopper,
                        a doctor and anthropomorphized reindeer; Nico Robin, an archaeologist and former assassin;
                        Franky, a cyborg shipwright; Brook, a skeletal musician and swordsman; and Jimbei,
                        a fish-man helmsman and former member of the Seven Warlords of the Sea. Once the Going Merry becomes damaged beyond repair,
                        the Straw Hat Pirates acquire a new ship named the Thousand Sunny. Together, they encounter other pirates, bounty hunters,
                        criminal organizations, revolutionaries, secret agents and soldiers of the corrupt World Government,
                        and various other friends and foes, as they sail the seas in pursuit of their dreams.
                    </Text>
                </View>
                {/* subcontainer that talks about why I like the anime */}
                <View style={styles.showSubContainter}>
                    <Text style={styles.showSubheader}>Why I Love This Anime</Text>
                    <Text style={styles.showText}>
                        The biggest reason why this is my favorite anime is because of the world building.
                        Oda (the creator), never forgets what's happening and is very consistent with the plot of One Piece.
                        In fact, recently there was a character that was introduced in the 2nd episode and is relevant again - 20 years later!
                        This is not the only occasion, but one of many.
                        There are so many things to explore - powers, places, people, and history that keeps you entertained after all this time.
                        The anime also manages to have a great balance between serious, action, comedy, and sad parts. 
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

export default Anime;