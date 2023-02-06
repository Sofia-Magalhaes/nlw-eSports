// Função que retorna o token do dispositivo do usuario

import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken(){
    const {granted} = await Notifications.getPermissionsAsync();

    if(!granted){
        await Notifications.requestPermissionsAsync();
    }
    
    if(granted){
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('Notification TOKEN =>', pushToken.data);

        return pushToken.data;
    }
}