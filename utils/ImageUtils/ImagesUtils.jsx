import * as MediaLibrary from 'expo-media-library';

export const savePicture = async (image, setImage, getLastSavedImage) => {
  if (image) {
    try {
      const asset = await MediaLibrary.createAssetAsync(image);
      Alert.alert('Photo saved!', image);
      setImage(null);
      getLastSavedImage();
    } catch (err) {
      console.log('Error while saving the picture:', err);
    }
  }
};

export const getLastSavedImage = async (mediaLibraryPermissionResponse, setPreviousImage) => {
    if (mediaLibraryPermissionResponse && mediaLibraryPermissionResponse.status === 'granted') {
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
          setPreviousImage(assetInfo.localUri || assetInfo.uri);
        } else {
          setPreviousImage(null);
        }
      } else {
        setPreviousImage(null);
      }
    }
  };