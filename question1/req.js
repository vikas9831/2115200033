const axios = require('axios');

const register = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/test/register', {
      companyName:"GLA",
      ownerName:"Vikash sharma",
      rollNo: "2115200033",
      ownerEmail: "vikash.sharma_cs.da21@gla.ac.in",
      accessCode: "llntgp"
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

register();
