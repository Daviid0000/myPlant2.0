import * as MediaLibrary from 'expo-media-library';

export const getLastSavedImage = async () => {
    const dcimAlbum = await MediaLibrary.getAlbumAsync('DCIM');

    if (dcimAlbum) {
        const { assets } = await MediaLibrary.getAssetsAsync({
            album: dcimAlbum,
            sortBy: [[MediaLibrary.SortBy.creationTime, false]],
            mediaType: MediaLibrary.MediaType.photo,
            first: 1,
        });

        if (assets.length > 0) {
            const assetInfo = await MediaLibrary.getAssetInfoAsync(assets[0].id);
            return assetInfo.localUri || assetInfo.uri;
        }
    }

    return null;
};

export const savePicture = async (image) => {
    try {
        const asset = await MediaLibrary.createAssetAsync(image);
        await MediaLibrary.getAssetInfoAsync(asset.id);
        Alert.alert('Photo saved!', image);
    } catch (err) {
        console.error('Error while saving the picture:', err);
    }
};