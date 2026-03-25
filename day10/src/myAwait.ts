interface User {
  name: string;
  age: number;
  email: string;
}

const fetchDataFromServer = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    try {
      throw new Error('Simulated server error'); // Simulate an error for testing
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          age: 30,
          email: 'john.doe@example.com',
        });
      }, 500);
    } catch (e) {
      reject(new Error(e instanceof Error ? e.message : 'Unknown error'));
    }
  });
};

const getUserInfo = async (): Promise<string> => {
  try {
    const data = await fetchDataFromServer();
    return `Name: ${data.name}, Age: ${data.age}, Email: ${data.email}`;
  } catch (e) {
    if (e instanceof Error) {
      console.error('Error fetching user info:', e.message);
      return `Error: ${e.message}`;
    }
    return 'An unknown error occurred';
  }
};

const userInfo = await getUserInfo();
console.log(userInfo);
