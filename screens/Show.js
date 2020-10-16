import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Animated, StyleSheet, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

//imports the image cycle button
import ImageCycle from "../components/ImageCycle";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Show = () => {
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
                    text: "Favorite Show",
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
                <Text style={styles.showHeader}> Jane the Virgin</Text>
                <Image
                    style={styles.showImages}
                    source={
                        isOdd
                            ? require("../assets/images/jtv.png")
                            : require("../assets/images/jtv2.jpg")
                    }
                />
                <ImageCycle countIncrementHandler={countIncrementHandler} />

                {/* subcontainer that talks about the premise of the show */}
                <View style={styles.showSubContainter}>
                    <Text style={styles.showSubheader}>The Premise</Text>
                    <Text style={styles.showText}>
                        Set in Miami,
                        the series details the surprising and dramatic events that take place in the life of Jane Gloriana Villanueva,
                        a hard-working, religious, young, Venezuelan-American woman.
                        Jane's vow to save her virginity until marriage is threatened when a doctor mistakenly artificially inseminates her during a checkup.
                        To make matters worse, the biological father is a married man,
                        a former playboy, and a cancer survivor who is not only the new owner of the hotel where Jane works but was also her former teenage crush.
                        {"\n\n"}In addition to adjusting to pregnancy and then motherhood,
                        Jane is faced with questions about her professional future and the daunting prospect of choosing between the father of her baby or her detective boyfriend.
                        As the series evolves, the issues shift as her child grows into a toddler,
                        her writing career moves forward, and her family members likewise develop independent plotlines.
                    </Text>
                </View>
                {/* subcontainer that talks about why I like the show */}
                <View style={styles.showSubContainter}>
                    <Text style={styles.showSubheader}>Why I Love This Show</Text>
                    <Text style={styles.showText}>
                        One reason that I love this show is due to how much I can relate with the themes explored.
                        Some of these include: immigration status, health concerns, and self-discovery.
                        This show also reminds me of Filipino "teleseryes", shows I used to watch as a kid.
                        Watching Jane the Virgin helped me realize that this is not just a show, but one that displays how different cultures connect and consume media.
                        It has made me laugh, cry, be frightened, feel grief, surprised, and the list keeps going. 
                        It's no wonder that this show is critically acclaimed and is also listed as one of the top 10 Television Programs of 2014 by the American Film Institute.
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

export default Show;