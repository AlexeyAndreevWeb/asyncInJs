export const getDogImage = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breed/hound/afghan/images/random/10')

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json()
  } catch (error) {
    console.error(`Errot fetching dogs image ${error}`)
  }
}