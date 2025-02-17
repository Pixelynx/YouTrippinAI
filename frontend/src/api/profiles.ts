export const addProfile = async (profileData: any) => {
    const response = await fetch('/api/profiles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    });
    return response.json();
  };
  
  export const getSimilarProfiles = async (queryData: any) => {
    const response = await fetch('/api/query_profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryData)
    });
    return response.json();
}