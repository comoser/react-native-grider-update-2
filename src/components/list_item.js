import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { expanded, library: { description } } = this.props;
        const { descriptionStyle }  = styles;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>
                        {description}
                    </Text>
                </CardSection>
            );
        }
        return null;
    }

    render() {
        const { library: { id, title }, selectLibrary } = this.props;
        const { titleStyle }  = styles;
        return (
            <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    descriptionStyle: {
        flex: 1,
    },
};

function mapStateToProps({ selectedLibraryId }, ownProps) {
    const expanded = selectedLibraryId === ownProps.library.id;
    return {
        expanded,
    };
}

export default connect(mapStateToProps, { selectLibrary })(ListItem);
