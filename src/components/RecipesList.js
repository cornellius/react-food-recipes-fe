import { Card } from 'semantic-ui-react';

const RecipesList = ({ recipes }) => {
    console.log(recipes);
    if (recipes.length === 0) {
        return (
            <div style={{ padding: 10 }}>
                <i class="heartbeat icon"></i><p>No recipes found based on the ingredients search criteria!</p>
            </div>
        );
    }else {
        return (
            <div style={{ padding: 10 }}>
                <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                    {recipes.map((item) => {
                        return (
                            <Card key={item.id}>
                                <Card.Content>
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Description>
                                        <div className="ui list">
                                            {item.ingredients.map(function(ingredient, index){
                                                return (
                                                    <div className="item">
                                                        <i className="utensils icon"></i>
                                                        <div class="content">
                                                            <div class="description">{ingredient}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })} 
                                        </div>
                                        <hr/>
                                        <p><strong>Author: {item.author.name}</strong></p>
                                        <p><strong>Category: {item.category.name}</strong></p>
                                        <p><strong>Ratings: {item.ratings}</strong></p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            </div>
            );
    }

};

export default RecipesList;