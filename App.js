/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {Image, StyleSheet} from 'react-native'
import UnitTest from "./JSCode/UnitTest";
import PhaseTest from "./JSCode/PhaseTest";
import My from "./JSCode/My";


export default class App extends React.Component {


    render() {

        return (
            <TabNavigator tabBarStyle={{height: this.state.tabBarHeight, overflow: 'hidden'}}
                          sceneStyle={{paddingBottom: this.state.tabBarHeight}}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'unit'}
                    title="单元测"
                    renderIcon={() => <Image style={styles.icon} source={require('./image/unit.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('./image/unitSelected.png')}/>}
                    onPress={() => this.setState({ selectedTab: 'unit'})}>
                    <UnitTest/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'phase'}
                    title="阶段考"
                    renderIcon={() => <Image style={styles.icon} source={require('./image/phase.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('./image/phaseSelected.png')}/>}
                    onPress={() => this.setState({ selectedTab: 'phase'})}>
                    <PhaseTest/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="个人中心"
                    renderIcon={() => <Image style={styles.icon} source={require('./image/my.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('./image/mySelected.png')}/>}
                    onPress={() => this.setState({ selectedTab: 'my'})}>
                    <My/>
                </TabNavigator.Item>
            </TabNavigator>


        );

    }
    constructor(props){
        super(props);
        this.state = {selectedTab: "unit"}
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
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});