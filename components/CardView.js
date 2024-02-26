import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { cardStyles, componentStyles, textStyle } from '../theme/style'
import PropTypes from "prop-types";
import { Card, Image } from 'react-native-ui-lib';

const avatarImage = require('../assets/images/profile.jpg');

export const CardView = (props) => {
    const {
        backgroundColor = '#fff',
        cardTitle = '',
        cardReadings = 0,
        containerStyle,        
        row = true,
        children
    } = props;

    return (
        <>
            <Card flex row={row}
                containerStyle={[
                    containerStyle,
                    {
                        backgroundColor,
                        marginRight: 8,
                        marginLeft: 8,
                        
                    }
                ]}

            >
                {/* {console.log(cardMargin)} */}
                {children}

                {/* <Card.Section flex
            content={[
              { text: `${cardTitle}`, text50: true, white: true },
              {
                text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
                text80: true,
                $textDefault: true
              },
              { text: '500p/s', text50: true, $textDisabled: true, white: true }
            ]}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 8,
              backgroundColor: '#6ed6ff'
            }}>
              
          </Card.Section> */}
            </Card>
        </>

    )

}

CardView.propTypes = {
    backgroundColor: PropTypes.string,
    containerStyle: PropTypes.any,
    row: PropTypes.bool,
    Children: PropTypes.any,
};
