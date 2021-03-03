import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class DishDetail extends Component{
	    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.dish,
			selectedDish: null
        }

    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
renderDish(dish) {
        if (dish != null)
            return(
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
				);
			else
				return(
					<div></div>
				);
    }
	render(){
		const Sdish=this.state.dish
		 if (Sdish != null)
		{
			return(
                <div >
                    {this.renderDish(Sdish)}
                </div>
			)
		}
		else
		{
			return (<div></div>)
		}
	}
	
}
export default DishDetail;