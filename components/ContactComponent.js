import React from 'react';
import {Card} from 'react-native-elements';
import { View,Text } from 'react-native';
const Contact = (props)=>{
    return(
        <View>
             <Card>
                <Card.Title>Contact Information</Card.Title>
                
                <Card.Divider/>
                <Text>121, Clear Water Bay Road</Text>
                <Text>Clear Water Bay, Kowloon</Text>
                <Text>HONG KONG</Text>
                <Text>Tel: +852 1234 5678</Text>
                <Text>Fax: +852 8765 4321</Text>
               <Text>Email:confusion@food.net</Text>
            </Card>
        </View>
    )
}

export default Contact;