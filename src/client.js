import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; 

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-01',
    useCdn: false,
});
console.log(import.meta.env.VITE_SANITY_PROJECT_ID);


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);