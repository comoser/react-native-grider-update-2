import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './list_item';

class LibraryList extends Component {
    keyExtractor = (item) => item.id;

    renderRow({ item }) {
        return <ListItem library={item}/>;
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderRow}
            />
        );
    }
}

function mapStateToProps({ libraries }) {
    return {
        libraries,
    };
}

export default connect(mapStateToProps)(LibraryList);
