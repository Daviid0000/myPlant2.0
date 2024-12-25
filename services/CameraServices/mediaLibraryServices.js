import * as MediaLibrary from 'expo-media-library';

export const getLastSavedImage = async () => {
  const { assets } = await MediaLibrary.getAssetsAsync({
    sortBy: [[MediaLibrary.SortBy.creationTime, false]],
    mediaType: [MediaLibrary.MediaType.photo],
    first: 1,
  });
  return assets.length > 0 ? assets[0].uri : null;
};

export const saveImageToLibrary = async (imageUri) => {
  const permission = await MediaLibrary.requestPermissionsAsync();
  if (!permission.granted) {
    throw new Error('Permission to access media library is required.');
  }
  return await MediaLibrary.createAssetAsync(imageUri);
};
