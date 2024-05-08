/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/colors";
import { fontSize, scalableheight } from "../../assets/dimensions";


export function CustomFooter () {
    return(
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.C}>C</Text>
                <Text style={styles.chime}>Chime</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.chime}>curated by</Text>
                <Image 
                    source={require('../../assets/images/mobbin.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.chime}>Mobbin</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        width:'100%',
        height:scalableheight.five,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:scalableheight.one
    },
    flex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    C:{
        backgroundColor:colors.primary,
        paddingHorizontal:scalableheight.one,
        color:colors.white,
        fontSize:fontSize.twenty,
        fontWeight:'bold',
        borderRadius:fontSize.borderradius,
        marginVertical:scalableheight.pointeight,
        marginRight:scalableheight.pointeight,
    },
    chime:{
        color:colors.white,
        fontSize:fontSize.fifteen,
        fontWeight:'400',
    },
    logo:{
        height:scalableheight.four,
        width:scalableheight.four,
        resizeMode:'contain'
    }
})