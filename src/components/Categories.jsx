import React, { Component } from 'react';

class Categories extends Component {
    state = {
        categories: ['all', 'breakfast', 'lunch', 'shakes'],
    };
    render() {
        return (
            <div className='btn-container'>
                {this.state.categories.map((category, index) => {
                    return (
                        <button
                            key={index}
                            type='button'
                            className='filter-btn'
                            onClick={() => this.props.onFilterMenu(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default Categories;
