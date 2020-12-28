import React,{Component} from 'react';

import { View, Text, Image } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { DISHES } from '../shared/dishes';

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

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    // static navigationOptions = {
    //     title: 'Dish Details'
    // };

    render() {
        console.log(this.props.route);
        const dishId = this.props.route.params.dishId;
        return(
            <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}

export default Dishdetail;