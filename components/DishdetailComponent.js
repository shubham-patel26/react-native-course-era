import React from 'react';

import { View, Text, Image } from 'react-native'
import { Card, ListItem } from 'react-native-elements'

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                

                <Card>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('./images/uthappizza.png')}>
                        <Text style={{marginBottom: 10}}>
                        {dish.description}                        
                        </Text>
                        
                    </Card.Image>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}

export default Dishdetail;