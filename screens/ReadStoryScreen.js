import React from 'react';
import { Text, View,TouchableOpacity ,StyleSheet,TextInput,Image,FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import database from '../Config';

export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            search:'',
            arrayallstories: [],
            arraysearchstory: [],
          
        }
    }
    //reading all the stories from database. Store it in this.state.arrayallstories.
    retriveStories = async() =>{
        const stories = await database.collection("Stories").get();
        stories.docs.map((doc) =>
            this.setState({
                arrayallstories: [...this.state.arrayallstories,doc.data()],                
      }))
     
    }
    //pass the search text directly into filter function
    //check the searched word in all stories array
    // if there is a match, push it in specific search story
    //if nothing is searched keep search story empty.
    SearchFilterFunction = (search) => {
       
        var arraysearch = []
      if(search.length >0){
      
        this.state.arrayallstories.filter((eachstory)=>{
        var posA = eachstory.Author.search(search);
        var posT = eachstory.Title.search(search);
        var posS = eachstory.Story.search(search);
       
        if(posA >=0 || posS>=0 || posT>= 0){
            arraysearch.push(eachstory);
         
        }

        })
        this.setState({arraysearchstory: arraysearch})
        arraysearch = [];
       
        
    } else{
        this.setState({arraysearchstory: []})
    }
}
    //when component mounts read all stories.
    componentDidMount(){
        this.retriveStories();
        
    }
// on change in search content call the filter function
    onchangetext = text =>{
            console.log(text)
          this.setState({search:text})
          //  this.setState(state => ({ ...state, text: text || "" }))
            this.SearchFilterFunction(text)
           }

    
    render(){
        
        return(
            <View >
                <Text style={styles.header}> Bed time Stores </Text>
                <SearchBar 
                 placeholder="Search..."
                 onChangeText={this.onchangetext}
                 onCancel={() => this.setState({search:'',arraysearchstory:[]})}
                 onClear={() => this.setState({search:'',arraysearchstory:[]})}
                 showLoading = {true}
                 value={ this.state.search}
                />
                 <FlatList
                 
                    data={this.state.arraysearchstory.length > 0 ? this.state.arraysearchstory:(this.state.search.length >0? '':this.state.arrayallstories)}
                    renderItem={({item}) => (
                    
                        <View style={{borderBottomWidth:2}}>
                        <Text>Author:{item.Author}</Text>
                        <Text>Title:{item.Title}</Text>
                        <Text>Story:{item.Story}</Text>
                    
                        </View>
                    )}

                    keyExtractor={(item,index) => index }
                 
      />
                </View>
               
        )
        
    }
}
const styles = StyleSheet.create({
    header : {
        fontSize: 30,
        backgroundColor: '#ffaaa5',
        textAlign: 'center',
        marginTop:20,
    }
})