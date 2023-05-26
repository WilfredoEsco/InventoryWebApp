import React from 'react';
import axios from 'axios';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function SearchForm() {

    const [data, setData] = React.useState({
        model: '',
        part: ''
    })

    // data handles
    const handleModelChange = (val) => {
        setData({
            ...data,
            model: val
        })
    }

    const handlePartChange = (val) => {
        setData({
            ...data,
            part: val
        })
    }

    //submit handle
    const submitHandle = () => {
        submitData(data.model, data.part)
    }

    // submit data to server - no token needed
    const submitData = (model, part) => {
        try {
            // define URL for api call - Need to define route with arguments in backend
            // EXAMPLE: URL + 'search?model=' + model
            const urlCheck = ('http://10.1.10.223:5000/search?model=' + model + '&part=' + part)


            // console log info
            console.log(' ')
            console.log('API CALL INITIATED - SENDING DATA')
            console.log(urlCheck)

            // api call 
            axios.get(urlCheck)
            .then(resp => {
                // server response
                if (resp.data) {
                    console.log('success')
                    console.log(resp.data.Message)
                } else {
                    console.log('failed')
                }
            })

        } catch (e) {
            console.log(e.response)
            console.log('error')
        }
        return null
    }

    return (
        <View style={styles.searchForm}>
            <View style={styles.modelSection}>
                <Text style={styles.modelText}>Model:</Text>
                <TextInput 
                    style={styles.modelInput}
                    placeholder='Model'
                    placeholderTextColor='grey'
                    onChangeText={(val) => handleModelChange(val)}   
                />
            </View>
            <View style={styles.partSection}>
                <Text style={styles.partText}>Part:</Text>
            </View>
            <TouchableOpacity onPress={() => {submitHandle()}}>
                <View style={styles.searchButton}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    searchForm: {
        backgroundColor: 'lightgrey',
        height: 400,
        alignItems: 'center',
    },
    modelSection: {
        marginTop: 75,
        flexDirection: 'row'
    },
    modelText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10
    },
    modelInput: {
        height: 45,
        width: 250,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 10
    },
    partSection: {
        marginTop: 15,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    partText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10
    },
    searchButton: {
        backgroundColor: 'grey',
        height: 45,
        width: 125,
        borderRadius: 10,
        marginLeft: 225,
        marginTop: 215
    },
    searchText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 24
    }
})
export default SearchForm;