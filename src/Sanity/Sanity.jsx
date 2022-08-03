import sanityClient from "@sanity/client";


const sanityCli =  sanityClient({
  projectId: "s8uscnsp", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: '2021-10-21',
});


export default sanityCli;
