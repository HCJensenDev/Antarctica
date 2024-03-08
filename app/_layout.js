import { Link, Slot } from "expo-router";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Layout = () => {
    return (
        <SafeAreaView style= {{flex: 1}}>
            <Header />
            <Slot />
        </SafeAreaView>

    )
}

const Header = () => {
    return(
        <View style={header.container}>

            {/* LOGO */}
            <Pressable>
                <Link href="/" style={{display: "flex", alignItems: "center"}}>
                    <Image style={header.logo} source={"../assets/penguin_3495342.png"}/>
                    <Text style={header.text}>
                        Project Antarctica
                    </Text>
                </Link>
            </Pressable>

            {/* NAVIGATION */}
            <View style={navigation.container}>
                <NavItem title="Fridge" source="/"></NavItem>
                <NavItem title="Freezer" source="/"></NavItem>
                <NavItem title="Recipes" source="/"></NavItem>
            </View>

            {/* USER */}
            <Pressable>
                <Link href="/profile" style={{display: "flex", alignItems: "center"}}>
                    <Text style={header.text}>
                        Username
                    </Text>
                    <Image style={header.user} source={"../assets/user_1144760.png"}/>
                </Link>
            </Pressable>
            
        </View>
    )
}

const NavItem = props => {
    return(
        <Pressable style={({hovered}) => [hovered ? navButtonHover : navigation.navButton,]}>
            <Link href={props.source}>
                <Text style={header.text}>
                    {props.title}
                </Text>
            </Link>
        </Pressable>
    )
}

export default Layout



const header = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 30,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        maxHeight: 60,
        borderBottomWidth: 1,
        borderBlockColor: "lightgrey",
    },
    text: {
        fontSize: "30px",
    },
    logo: {
        height: 50,
        width: 50,
    },
    user: {
        height: 45,
        width: 45,
        marginHorizontal: 10,
    },
})

const navigation = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        maxHeight: 59,
        width: "fit-content",
    },
    navButton: {
        paddingHorizontal: 19,
        paddingVertical: 10,
    },  
    navButtonHover: {
        backgroundColor: "lightgrey",
    }
})

const navButtonHover = StyleSheet.compose(navigation.navButton, navigation.navButtonHover)