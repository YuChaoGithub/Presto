import React from 'react';
import { Image, ListItem } from 'react-native-elements';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function restaurantList(props) {
    const list = [
        {
          name: 'meridien cyberport',
          avatar_url: 'data:image/jpeg;base64,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',
          subtitle: 'Yummy'
        },
        {
          name: 'Dining Room',
          avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipNczegB18LHeeIEZjMJgELUSKDI7Z2Vt0TLTlUk=w426-h240-k-no',
          subtitle: 'wonderful'
        },
        {
          name: 'PHD Pizza Delivery',
          avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipNKF9gSBInCnGL11Rxj6m895nM5gaht7BdW_xYv=w408-h279-k-no',
          subtitle: 'great'
        },{
          name: 'Pacific Coffee',
          avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipM7XeULzGb-2YT8DKaYkxW4-ttZBUMjzr9QmOdP=w408-h305-k-no',
          subtitle: 'delicious'
        },{
          name: 'starbucks',
          avatar_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
          subtitle: 'expensive'
        },
<<<<<<< HEAD
          ];
      
        return (
      <View>
    <Image
    source={{ uri: 'http://www.dituxin.com/uploads/allimg/160417/1-16041F91503440.jpg' }}
    style={{ width: 390, height: 280 }}
    />    
              {
=======
    ];

    return (
        <View>
            <Image
                source={require('../map.png')}
                style={{ width: 390, height: 280 }}
            />
            {
>>>>>>> dd75e460a95ccf986505a8400b29332422d6dc7d
                list.map((l, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                  />
                ))
              }
      </View>
    );
}