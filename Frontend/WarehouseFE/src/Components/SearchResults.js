import React,{useState,useEffect} from "react";
import { View,Text, FlatList } from "react-native";

const dataComponents =() =>{
    const [data,setData] = useState([]);

    useEffect(()=> {
        fetchDataFromBackEnd();
    },[]);

    const fetchDataFromBackEnd = async()=> {
        //make api call to fetch data from background
        const response = await fetch('10.1.10.223:5000');
        const jsonData = await response.json();

        setData(jsonData);
    };

    const renderTable = ({item}) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </View>
        );
        };
        return(
            <View>
                <FlatList 
                data={data}
                renderItem={renderTable}
                keyExtractor={(item)=> item.id.toString()}
                />
            </View>
        ); 
};

export default dataComponents;