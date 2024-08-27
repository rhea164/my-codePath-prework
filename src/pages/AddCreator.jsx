
import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('creators')
            .insert([{ name, url, description, imageURL }]);
        if (error) {
            console.error(error);
        } else {
            // Redirect to home page after adding the creator
            window.location = '/';
        }
    };


    return (
        <div className='flex flex-col items-center justify-center'>

            <h1 className="">Add New Creator</h1>
            <form onSubmit={handleSubmit} className='class="max-w-sm mx-auto"'>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className='flex'>
                    <div className='mb-11'>
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 mb-11 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium">Image</label>
                        <input
                            id="image"
                            type="url"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            placeholder="Image URL"
                            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                        />
                    </div>


                    <h2 className="text-xl font-semibold mt-6 mb-4">Social Media Links</h2>

                    <div>
                        <label htmlFor="youtube" className="block text-sm font-medium">YouTube</label>
                        <input
                            id="youtube"
                            type="text"
                            value={url}
                            onChange={(e) => setYoutube(e.target.value)}
                            placeholder="YouTube handle (without the @)"
                            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="twitter" className="block text-sm font-medium">Twitter</label>
                        <input
                            id="twitter"
                            type="text"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            placeholder="Twitter handle (without the @)"
                            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="instagram" className="block text-sm font-medium">Instagram</label>
                        <input
                            id="instagram"
                            type="text"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            placeholder="Instagram handle (without the @)"
                            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                        />
                    </div>

                    <div className="flex space-x-4 mt-6">
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
                        <button type="button" onClick={() => window.history.back()} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">Cancel</button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default AddCreator;



