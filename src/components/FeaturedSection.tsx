
import React from 'react';
import { PromptCard } from './PromptCard';

const FEATURED_PROMPTS = [
  {
    id: '1',
    title: 'Photorealistic Nature Scenes',
    description: 'Create stunning nature imagery with this optimized prompt for Midjourney and DALL-E.',
    category: 'Image Generation',
    author: {
      name: 'Elena',
      avatar: 'https://i.pravatar.cc/150?img=1',
      address: '0x1234...5678',
    },
    likes: 243,
    comments: 18,
    previewImage: 'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d',
  },
  {
    id: '2',
    title: 'Sci-Fi Character Creator',
    description: 'Design detailed sci-fi characters with backstories and unique traits.',
    category: 'Characters',
    author: {
      name: 'Alex',
      avatar: 'https://i.pravatar.cc/150?img=2',
      address: '0x2345...6789',
    },
    likes: 187,
    comments: 24,
    previewImage: 'https://images.unsplash.com/photo-1597858520171-563a8e8b9925',
  },
  {
    id: '3',
    title: 'Business Strategy Advisor',
    description: 'Get detailed business advice tailored to your industry and company size.',
    category: 'Business',
    author: {
      name: 'Michael',
      avatar: 'https://i.pravatar.cc/150?img=3',
      address: '0x3456...7890',
    },
    likes: 154,
    comments: 42,
  },
  {
    id: '4',
    title: 'Fantasy World Builder',
    description: 'Create immersive fantasy worlds with detailed geography, cultures, and magic systems.',
    category: 'Worldbuilding',
    author: {
      name: 'Sophia',
      avatar: 'https://i.pravatar.cc/150?img=4',
      address: '0x4567...8901',
    },
    likes: 312,
    comments: 37,
    previewImage: 'https://images.unsplash.com/photo-1560807707-8cc77767d783',
  },
];

export const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Prompts</h2>
            <p className="text-muted-foreground">Discover the most popular AI prompts on the platform</p>
          </div>
          <a 
            href="#"
            className="mt-4 md:mt-0 text-spark-purple hover:text-spark-teal transition-colors"
          >
            View all prompts
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PROMPTS.map(prompt => (
            <PromptCard key={prompt.id} {...prompt} />
          ))}
        </div>
      </div>
    </section>
  );
};
