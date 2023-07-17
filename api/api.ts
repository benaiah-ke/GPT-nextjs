import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// New resource
export const createResource = async (resourceData) => {
  try {
    const response = await axios.post(`${BASE_URL}/resource`, resourceData);
    return response.data;
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
};

// Read all resources
export const getAllResources = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/resource`);
    return response.data;
  } catch (error) {
    console.error('Error getting resources:', error);
    throw error;
  }
};

// Read a single resource by ID
export const getResourceById = async (resourceId) => {
  try {
    const response = await axios.get(`${BASE_URL}/resource/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting resource with ID ${resourceId}:`, error);
    throw error;
  }
};

// Update a resource by ID
export const updateResource = async (resourceId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/resource/${resourceId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating resource with ID ${resourceId}:`, error);
    throw error;
  }
};

// Delete a resource by ID
export const deleteResource = async (resourceId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/resource/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting resource with ID ${resourceId}:`, error);
    throw error;
  }
};
