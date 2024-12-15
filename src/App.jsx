import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import getAndSetImages from "./utils/getSomeImage";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const getUrl = () => {
    if (query) {
      return `https://api.unsplash.com/search/photos/?client_id=xfksvx4N3MLY3CQ2cYl_WHGwFkdtXgwXWuA2RLP-kzg&page=${page}&query=${query}`;
    } else {
      return `https://api.unsplash.com/photos/?client_id=xfksvx4N3MLY3CQ2cYl_WHGwFkdtXgwXWuA2RLP-kzg&page=${page}`;
    }
  };

  useEffect(() => {
    const url = getUrl();
    if (query || page === 1) {
      getAndSetImages(url, setLoading, setImages, false);
    } else {
      getAndSetImages(url, setLoading, setImages, true);
    }
  }, [query, page]);

  function openModal(image) {
    setModalImg(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setModalImg(null);
  }

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <ImageGallery images={images} onImgClick={openModal} />
      {loading && <Loader />}
      {images.length > 1 && <LoadMoreBtn setPage={setPage} />}
      {modalImg && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalImg={modalImg}
        />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
