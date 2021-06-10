import React from 'react';
import { Text, View,TouchableOpacity ,StyleSheet,TextInput,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import database from '../Config';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            story: '',
        }
    }
    storestory = async () => {
        database.collection("Stories").add({
            Title : this.state.title,
            Author: this.state.author,
            Story: this.state.story,
        });
        ToastAndroid.show("Story submitted successfully",ToastAndroid.SHORT);
        this.setState({
            title: '',
            author: '',
            story: '',
        })
    }
    render(){
        return(
            
            <KeyboardAvoidingView
             behavior={"height"} enabled  style={{ flex: 1}}
            >
            <Text style={styles.header}> Story Hub </Text>
            <TextInput  
            style = {styles.title}
            placeholder = "Story Title"
            onChangeText ={ (text) =>{ this.setState({title: text})}}
            value = {this.state.title} />
            <TextInput  
            style = {styles.title}
            placeholder = "Author"
            onChangeText ={ (text) =>{ this.setState({author: text})}}
            value = {this.state.author} />
            <TextInput  
            style = {[styles.title,{textAlignVertical:'top',height:400}]}
            placeholder = "Write your story"
            onChangeText ={ (text) =>{ this.setState({story: text})}}
            multiline = {true}
            value = {this.state.story} />
            <TouchableOpacity style={styles.submit} onPress={this.storestory}>
                <Text style={styles.submittext} > Submit </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
                
        )
    }
}
const styles = StyleSheet.create({
    header : {
        fontSize: 30,
        backgroundColor: '#ffaaa5',
        textAlign: 'center',
        marginTop:20,
    },
    title : {
        
        borderWidth:4,
        margin:15
    },
    submit:{
        width: 100,
        height:40,
       marginLeft:150,
        backgroundColor: '#e23e57',
        
    },
    submittext:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})