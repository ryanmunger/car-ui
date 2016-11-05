import React, { Component } from 'react';
import classes from './Carousel.scss';
import Icon from 'components/Icon';
import Text from 'components/Text';

export class Carousel extends Component {
    render () {
        const iconStyle = {
            position: 'absolute',
            top: '50%',
            fontSize: '2em',
            marginTop: '-20px'
        };
        const leftIconStyle = Object.assign({}, iconStyle, {
            left: '20px'
        });
        const rightIconStyle = Object.assign({}, iconStyle, {
            right: '20px'
        });
        return (
            <div className={classes.layout}>
                <Icon
                    name="chevron-left"
                    style={leftIconStyle}
                />
                <Text
                    style={{
                        margin: '0 0 4px 0',
                        fontSize: '22px',
                        fontWeight: 'bold' }}>
                    94.1 FM
                </Text>
                <Text
                    style={{
                        margin: '0 0 4px 0',
                        fontWeight: 'bold' }}>
                    A Sky Full of Stars
                </Text>
                <Text
                    style={{ margin: '0 0 0 0' }}>
                    Coldplay
                </Text>
                <Icon
                    name="chevron-right"
                    style={rightIconStyle}/>
            </div>
        );
    }
}

export default Carousel;
