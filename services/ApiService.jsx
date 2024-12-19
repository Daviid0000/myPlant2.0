export const sendImageToServer = async (base64Image) => {
    try {
        const response = await fetch('https://plant.id/api/v3/identification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': 'B6zKFvNl0mFHj65t8KuAkEqQW9bS9CknurXjuLnHCRTS8DSOmk',
            },
            body: JSON.stringify({
                images: [base64Image],
                latitude: 49.207,
                longitude: 16.608,
                similar_images: true,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const result = await response.json();
        console.log('Server response:', result);
        Alert.alert('Success', 'Image uploaded successfully!');

        return result;
    } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to upload image.');
    }
};