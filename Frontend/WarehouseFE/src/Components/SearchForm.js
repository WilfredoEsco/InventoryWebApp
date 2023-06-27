import React from 'react';
import axios from 'axios';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Table, Row, Rows } from 'react-native-table-component';

function SearchForm() {

    const partData = [
        {key:'1', value:'Engine'},
        {key:'2', value:'Transmission'},
        {key:'3', value:'AC Compressor'},
        {key:'4', value:'Alternator'},
        {key:'5', value:'Starter'},
    ]

    const [data, setData] = React.useState({
        model: '',
        part: ''
    })

    const [searchData, setSearchData] = React.useState([]);

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
            <View>
                <Text style={styles.titleText}>International Used Auto Parts</Text>
            </View>
            <View style={styles.modelSection}>
                <Text style={styles.modelText}>Model:</Text>
                <TextInput 
                    style={styles.modelInput}
                    placeholderTextColor='grey'
                    onChangeText={(val) => handleModelChange(val)}   
                />
            </View>
            <View style={styles.partSection}>
                <Text style={styles.partText}>Part:</Text>
                <SelectList 
                    style={styles.partList}
                    setSelected={(val) => setData(val)} 
                    data={partData} 
                    save="value"
                    search={false}
                    boxStyles={{width:250, backgroundColor: 'white'}}
                    dropdownStyles={{position:'absolute', top:40, zIndex: 999}}
                />
            </View>
            <TouchableOpacity onPress={() => {submitHandle()}}>
                <View style={styles.searchButton}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.resultText}>Results:</Text>
            </View>
            <View style={styles.searchResults}>
                <Table>
                    <Row
                        data={['Column 1', 'Column 2', 'Column 3']}
                        style={{ backgroundColor: '#f1f8ff' }}
                        textStyle={{ fontWeight: 'bold' }}
                    />
                    <Rows
                        data={searchData}
                        textStyle={{ margin: 6 }}
                        onPress={(rowIndex) => handleRowSelection(rowIndex)}
                    />
                </Table>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    searchForm: {
        backgroundColor: 'white',
        height: 750,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: '600',
        padding: 15
    },
    modelSection: {
        marginTop: 15,
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
        borderRadius: 10,
        
    },
    partSection: {
        backgroundColor: 'white',
        marginTop: 15,
        marginLeft: 10,
        flexDirection: 'row'
    },
    partText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10,
        paddingRight: 10
    },
    partList: {
        width: 500,
        padding: 5
    },
    searchButton: {
        backgroundColor: 'grey',
        height: 45,
        width: 125,
        borderRadius: 10,
        marginTop: 30,
        position: 'absolute',
        marginLeft: 60
    },
    searchText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 24
    },
    resultText: {
        fontSize: 25,
        fontWeight: '600',
        padding: 15,
        marginTop: 75,
        marginRight: 240
    },
    searchResults: {

    }
})
export default SearchForm;