import axios from 'axios';
import { useQuery,useMutation} from "@tanstack/react-query";
import { useGlobalContext } from './context';



  const url=`https://api.unsplash.com/search/photos?client_id=${
import.meta.env.VITE_API_SEARCH_KEY
  }`;
 
const Gallery = () => {
 const {searchTerm}= useGlobalContext()
 const response= useQuery({
    queryKey:['images',searchTerm],
    queryFn:async ()=>{
      const result=await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    }
  })
if(response.isLoading){
  return <section className='image-container'>
    <h4>Loading...</h4>
  </section>
}
if(response.isError){
  return <section className='image-container'>
    <h4>There was an Error..</h4>
  </section>
}
const results =response.data.results;
if(results.length <1){
  return <section className='image-container'>
    <h4>No results found</h4>
  </section>
}
const handleDownload = async (downloadUrl) => {
    try {
        const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.download = `${searchTerm}.jpg`; // Specify the desired filename
    downloadLink.target = '_blank'; // Open in a new tab
    downloadLink.rel = 'noopener noreferrer'; // Security best practice

    document.body.appendChild(downloadLink); // Append the link to the document
    downloadLink.click(); // Simulate a click on the link
    document.body.removeChild(downloadLink); // 
      // downloadLink.click();
      //  window.location.href = downloadUrl;
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  return (
    <section className='image-container'>
      {results.map((item) => {
        const imageUrl = item?.urls?.regular;
        return (
          <div key={item.id} className='image-item image-overlay'>
            <img src={imageUrl} alt={item.alt_description} className='img' />
             <button onClick={() => handleDownload(imageUrl)} className='download-btn'>
              Download Image
            </button>
          </div>
        );
      })}
    </section>
  );
}
export default Gallery