import axios from "axios";

const getUser = async () => {
  
  const response = await axios("https://jsonplaceholder.typicode.com/posts/1");

  // API Response
  console.log(response);

  // Data object from API Response
  console.log(response.data);


};

getUser();
