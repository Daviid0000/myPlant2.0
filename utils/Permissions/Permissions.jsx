import { useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export const usePermissions = () => {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = MediaLibrary.usePermissions();

  return {
    cameraPermission,
    requestCameraPermission,
    mediaLibraryPermissionResponse,
    requestMediaLibraryPermission,
  };
};