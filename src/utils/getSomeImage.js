import axios from "axios";
import toast from "react-hot-toast";

export default async function getAndSetImages(
  url,
  setLoading,
  setImages,
  more = false
) {
  setLoading(true);
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (Array.isArray(data)) {
      more
        ? setImages((prevImages) => [...prevImages, ...data])
        : setImages([...data]);
    } else if (data.results) {
      more
        ? setImages((prevImages) => [...prevImages, ...data.results])
        : setImages([...data.results]);
    } else {
      toast.error("Unexpected response format from API!");
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
}
