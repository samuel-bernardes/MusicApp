import AsyncStorage from '@react-native-async-storage/async-storage';



export const setStoreItem = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        // saving error
    }
}

export const setStoreObject = async (userinfo, storeTag) => {
    try {
        const jsonValue = JSON.stringify(userinfo)
        await AsyncStorage.setItem(storeTag, jsonValue)
    } catch (e) {

    }
}

export const getStoreItem = async (storeTag) => {
    try {
        const value = await AsyncStorage.getItem(storeTag)
        if (value !== null) {
            return value;
        }
    } catch (e) {
        // error reading value
    }
}

export const getStoreObject = async (storeTag) => {
    try {
        const jsonValue = await AsyncStorage.getItem(storeTag)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}