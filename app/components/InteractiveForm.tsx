'use client';

import { useState, FormEvent } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

export default function InteractiveForm() {
  const [post, setPost] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This function posts the data to the server and sets the post state
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const description = e.target.description.value;
    setLoading(true);

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.post) {
      setPost(result.post); // Set the post state with the result
    } else {
      console.error('Error:', result.error);
    }
  };

  const handleCopy = () => {
    if (post) {
      navigator.clipboard.writeText(post);
      alert('Post copied to clipboard!');
    }
  };

  const handleRegenerate = async () => {
    if (post) {
      setLoading(true);
      const description = post;
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.post) {
        setPost(result.post);
      }
    }
  };

  const handleEditClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSaveEdit = (editedPost: string) => {
    setPost(editedPost); // Update the post state with the edited content
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            id="description"
            name="description"
            rows={10}
            placeholder="Write your thoughts here..."
            className="
              block 
              w-full
              px-4 
              py-3 
              mt-4
              bg-[#ffffff]
              text-lg
              border 
              border-gray-300 
              text-black
              rounded-md 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-300 
              focus:border-transparent
            "
          />
          <button
            type="submit"
            className="
              absolute 
              bottom-2 
              right-2 
              p-2 
              rounded-full 
              text-black 
              bg-transparent 
              hover:bg-[#0A66C2]
              hover:text-white
            "
            disabled={loading}
          >
            <BsArrowRightCircle size={30} />
          </button>
        </div>
      </form>

      {post && (
        <div className="mt-6 text-black">
          <p className="text-lg">{post}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#0A66C2] rounded-full text-black hover:bg-[#0A66C2]"
            >
              Copy
            </button>
            <button
              onClick={handleRegenerate}
              className="px-4 py-2 bg-green-500 rounded-full text-black hover:bg-green-400"
            >
              Regenerate
            </button>
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-yellow-500 rounded-full text-black hover:bg-yellow-400"
            >
              Edit Post
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
          <span className="text-black">Generating post...</span>
        </div>
      )}

      {/* Modal for editing the post */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-bold mb-4">Edit Post</h2>
            <textarea
              value={post || ''}
              onChange={(e) => setPost(e.target.value)} // Directly update `post` state
              rows={15}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-300 rounded-full text-black hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveEdit(post || '')}
                className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-400"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
