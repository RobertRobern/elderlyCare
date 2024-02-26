import React from 'react';
import { View, FlatList } from 'react-native';
import { CustomCard } from './CustomCard'; // Import your CustomCard component


// to be improved/worked on to render custom cards

const data = [
  { id: '1', cardTitle: 'Card 1', cardColor: '#6ed6ff', cardReadings: 10 },
  { id: '2', cardTitle: 'Card 2', cardColor: '#ffcc00', cardReadings: 20 },
  { id: '3', cardTitle: 'Card 3', cardColor: '#ff6666', cardReadings: 30 },
  // Add more data as needed
];

const GridView = () => {

  const renderItem = ({ item }) => (
    <CustomCard
      cardTitle={item.cardTitle}
      cardColor={item.cardColor}
      cardReadings={item.cardReadings}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjust the number of columns as per your design
      />
    </View>
  );
};

export default GridView;