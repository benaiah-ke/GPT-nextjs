import { getAllResources } from '../api/api';

const MyPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resources = await getAllResources();
        console.log('All resources:', resources);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchData();
  }, []);

  // Rest of your component code
};

export default MyPage;
