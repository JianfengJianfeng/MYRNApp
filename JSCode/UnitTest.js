



import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Button,
    ScrollView
} from 'react-native';
import My from "./My";

export  default  class UnitTestNav extends  React.Component{

    render(){
        return(
            <NavigatorIOS
                initialRoute={{
                    component: UnitTest,
                    title: '单元测',
                    passProps:{index : 1},
                }}
                style={{flex: 1}}
            />
        );
    }
}
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class UnitTest extends React.Component {


    _onForward(){
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
            component: My,
            title: '第二页',
            passProps: {index: nextIndex}
        });


    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        单元测
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit App.js
                    </Text>
                    <Text style={styles.instructions}>
                        {instructions}
                    </Text>
                    <Button title={"点击"} color={"red"} onPress={ () => {
                        this._onForward()
                        this.props.hidesTabTouch
                    }}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});