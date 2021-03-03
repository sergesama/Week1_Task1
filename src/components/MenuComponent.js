import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
	convertDate(date){
		const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var D = new Date(date);
		var retD = " , " + MONTHS[D.getMonth()] + " " + D.getDate() + ", " + D.getFullYear()
		return retD;
	}
	renderComments(dish){
		if (dish != null)
		{
			const comments = dish.comments.map((com) => {
				return (
				  <div  className="list-unstyled">
					<div>{com.comment}</div>
					<div>
						{com.author} 
						{this.convertDate(com.date)}
					</div>
				  </div>
				);
			});
			return(
				<Card>
						<CardBody>
						  <h4>Comments</h4>
						  <CardText>{comments}</CardText>
						</CardBody>
					</Card>
			)
		}
		else
		{
			return(
					<div></div>
				);
		}
	}
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <DishDetail dish={dish} />
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}


export default Menu;
