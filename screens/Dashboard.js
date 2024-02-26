import { View, StyleSheet, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Text, AvatarHelper, Colors, Typography, AvatarProps, Card, Image, GridList } from 'react-native-ui-lib';
import colorPalletes from '../theme/colorPalletes'
import { textStyle, componentStyles, cardStyles, dashboardStyles } from '../theme/style'
import { cardContent } from '../data/card'
import { dataDoughnut } from '../data/chart'
import { LineChart, BarChart, PieChart } from "react-native-gifted-charts";

const avatarImage = require('../assets/images/profile.jpg');

const LineChartData = [
  { value: 15, dataPointText: '15', label: '22 Nov', showXAxisIndex: true },
  { value: 50, dataPointText: '50', },
  { value: 26, dataPointText: '26', label: '24 Nov', showXAxisIndex: true },
  { value: 40, dataPointText: '40', }
];

const BarChartData = [
  { value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Jan' },
  { value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Feb' },
  { value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Mar' },
  { value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'Apr' },
  { value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

  { value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label: 'May' },
  { value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
];

const pieChartData = [
  {
    value: 47,
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
  },
  {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
  {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
  {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
];
const data = [
  { id: '1', cardTitle: 'Humidity', cardColor: '#6ed6ff', cardReadings: 10, unitOfMeasure: '%', chartType: 'LineChart' },
  { id: '2', cardTitle: 'Pressure', cardColor: '#ffcc00', cardReadings: 20, unitOfMeasure: '%', chartType: 'BarChart' },
  { id: '3', cardTitle: 'Pulse Rate', cardColor: '#ff6666', cardReadings: 30, unitOfMeasure: '%', chartType: 'LineChart' },
  { id: '4', cardTitle: 'Heart Rate', cardColor: '#7dd666', cardReadings: 30, unitOfMeasure: '%', chartType: 'BarChart' },
];


const CustomLineChart = () => {
  const [currentData, setCurrentData] = useState(LineChartData);
  return (
    <View
      style={{
        // flex: 2,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        marginVertical: 2,
        paddingVertical: 5,
        backgroundColor: '#414141',
        borderRadius: 20,
      }}>
      <LineChart
        isAnimated
        thickness={5}
        color="#07BAD1"
        width={80}
        height={100}
        maxValue={80}
        noOfSections={4} //Scalling the chart
        // animateOnDataChange
        animationDuration={1000}
        onDataChangeAnimationDuration={300}
        areaChart
        yAxisTextStyle={{ color: 'white' }}
        data={currentData}
        // hideDataPoints
        startFillColor={'rgb(84,219,234)'}
        endFillColor={'rgb(84,219,234)'}
        startOpacity={0.4}
        endOpacity={0.1}
        spacing={40}
        backgroundColor="#414141"
        rulesColor="gray"
        rulesType="solid"
        initialSpacing={10}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        xAxisLabelTextStyle={{ color: 'white', width: 80, marginLeft: -36 }}
        xAxisIndicesHeight={10}
        xAxisIndicesWidth={2}
        showArrows
        // dataPointLabelComponent 
        // arrowConfig={{length: 3, width: 6}}
        color1="skyblue"
        color2="orange"
        textColor1="green"
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
      />
    </View>
  )
}

const CustomBarChart = () => {
  const [currentData, setCurrentData] = useState(BarChartData);
  return (
    <View
      style={{
        // margin: 10,
        // padding: 16,
        marginVertical: 2,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#232B5D',
      }}>
      {/* <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
        Overview
      </Text> */}
      <View style={{ padding: 5, alignItems: 'flex-start' }}>
        <BarChart
          data={currentData}
          width={80}
          height={100}
          barWidth={16}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          // showGradient
          yAxisThickness={0}
          xAxisType={'dashed'}
          xAxisColor={'lightgray'}
          yAxisTextStyle={{ color: 'lightgray' }}
          stepValue={1000}
          maxValue={6000}
          noOfSections={6}
          yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
          labelWidth={40}
          xAxisLabelTextStyle={{ color: 'lightgray', textAlign: 'center' }}
          showLine
          lineConfig={{
            color: '#F29C6E',
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
        />
      </View>
    </View>
  )
}

const CustomPieChart = () => {
  const [currentData, setCurrentData] = useState(LineChartData);
  return (
    <></>
  )
}
const CustomCard = (props) => {

  const {
    cardColor = '#6ed6ff',
    cardTitle = 'Card Title',
    cardReadings = 0,
    unitOfMeasure = '',
    chartType
  } = props;



  return (
    <>
      <Card flex row={true}
        containerStyle={{
          margin: 8,
          backgroundColor: `${cardColor}`
        }}
      >
        <View style={componentStyles.columnContainer}>
          <Text white style={textStyle.h4}>{cardTitle}</Text>

          {/* Rendering of charts */}

          {chartType == 'LineChart'? <CustomLineChart/> : <CustomBarChart/>}
          <Text white style={textStyle.h4}>{cardReadings}{unitOfMeasure}</Text>
        </View>
      </Card>
    </>

  )

}
const MetricView = () => {

  const renderItem = ({ item }) => (
    <CustomCard
      cardTitle={item.cardTitle}
      cardColor={item.cardColor}
      cardReadings={item.cardReadings}
      unitOfMeasure={item.unitOfMeasure}
      chartType={item.chartType}
    />
  );

  return (
    <View style={cardStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  // return (
  //   <>

  //     <View style={cardStyles.container}>
  //       {cardContent.length > 0 && cardContent.map((result, index) => {
  //         // if (result.backgroundColor == '#6ed6ff') {
  //         //   console.log(result.backgroundColor);

  //         // }
  //         {/* <GridList></GridList> */ }
  //         return (
  //           <CustomCard key={index}
  //             cardColor={result.backgroundColor}
  //             cardTitle={result.title}
  //             cardReadings={result.value}
  //           />
  //         )
  //       })}

  //       {/* <CustomCard /> */}
  //       {/* First card */}
  //       {/* <Card flex center row={true}
  //           containerStyle={{
  //             margin: 8,
  //           }}
  //         >    

  //           <Card.Section flex
  //             content={[
  //               { text: {title}, text50: true, white: true },
  //               {
  //                 text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
  //                 text80: true,
  //                 $textDefault: true
  //               },
  //               { text: '500p/s', text50: true, $textDisabled: true, white: true }
  //             ]}
  //             style={{
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //               padding: 8,
  //               backgroundColor: '#6ed6ff'
  //             }}>
  //           </Card.Section>            
  //     </Card> */}

  //       {/* Second card */}
  //       {/* <Card flex center row={true}
  //           containerStyle={{
  //             margin: 8,

  //           }}
  //         >            
  //           <Card.Section flex
  //             content={[
  //               { text: 'Temperature', text50: true, white: true },
  //               {
  //                 text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
  //                 text80: true,
  //                 $textDefault: true
  //               },
  //               { text: '24 oC', text50: true, $textDisabled: true , white: true }
  //             ]}
  //             style={{
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //               padding: 8,
  //               backgroundColor: '#5297ff'
  //             }}>
  //           </Card.Section>            
  //     </Card> */}
  //     </View>
  //   </>

  // )
}

export default function Dashboard(props) {
  // const {username} = props;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    // Main Container
    // <ScrollView 
    // style={styles.scrollView}
    // showsVerticalScrollIndicator={false}
    // refreshControl={
    //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    // }

    // >
    <View style={dashboardStyles.container} >

      {/* Sub Container 1 */}
      <View style={dashboardStyles.userContainer}>

        {/* Mini Sub Container 1.1*/}
        <View style={dashboardStyles.userBio}>
          <View style={dashboardStyles.username}>
            <Text style={textStyle.h4}>Hi, Robert</Text>
          </View>
        </View>

        {/* Mini Sub Container 1.2*/}
        <View style={dashboardStyles.healthScore}>
          <Card flex center row={true}
            containerStyle={{
              backgroundColor: '#f1f1f6',
              margin: 8,
            }}
          >
            <Card.Section flex imageSource={avatarImage}
              imageStyle={{ width: 150, height: 102 }}
              style={{
                justifyContent: 'center',
              }}
            />
            <Card.Section flex
              content={[
                { text: 'Health Score', text70: true, grey10: true },
                {
                  text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
                  text80: true,
                  $textDefault: true
                },
                { text: 'wix.to/A465c', text90: true, $textDisabled: true }
              ]}
              style={{
                justifyContent: 'center',
              }}>

            </Card.Section>
          </Card>
        </View>
      </View>

      {/* Sub Container 2*/}
      <View style={dashboardStyles.userMetrics}>
        <Text style={textStyle.h4}>Metrics</Text>
        <MetricView />
        {/* <MetricView/> */}
        {/* <Doughnut data={data} /> */}
      </View>

    </View>
    // </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});