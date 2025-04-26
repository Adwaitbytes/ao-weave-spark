
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundEffects } from '../components/BackgroundEffects';
import { PromptCard } from '../components/PromptCard';

// Mock data for prompts
const EXPLORE_PROMPTS = [
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
  {
    id: '5',
    title: 'Code Explainer',
    description: 'Get clear explanations for complex code snippets and programming concepts.',
    category: 'Programming',
    author: {
      name: 'David',
      avatar: 'https://i.pravatar.cc/150?img=5',
      address: '0x5678...9012',
    },
    likes: 198,
    comments: 29,
  },
  {
    id: '6',
    title: 'Abstract Art Generator',
    description: 'Create stunning abstract artwork using this detailed prompt pack.',
    category: 'Art',
    author: {
      name: 'Julia',
      avatar: 'https://i.pravatar.cc/150?img=6',
      address: '0x6789...0123',
    },
    likes: 267,
    comments: 31,
    previewImage: 'https://images.unsplash.com/photo-1543857778-c4a1a9e0615f',
  },
  {
    id: '7',
    title: 'Travel Itinerary Builder',
    description: 'Generate detailed travel itineraries based on location, duration, and interests.',
    category: 'Travel',
    author: {
      name: 'Marco',
      avatar: 'https://i.pravatar.cc/150?img=7',
      address: '0x7890...1234',
    },
    likes: 221,
    comments: 45,
  },
  {
    id: '8',
    title: 'Marketing Copy Assistant',
    description: 'Create compelling marketing copy for various platforms and campaigns.',
    category: 'Marketing',
    author: {
      name: 'Rebecca',
      avatar: 'https://i.pravatar.cc/150?img=8',
      address: '0x8901...2345',
    },
    likes: 176,
    comments: 22,
  },
];

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navbar />
      <main className="pt-24 flex-grow">
        <section className="py-10 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore AI Prompts</h1>
                <p className="text-muted-foreground">Discover and use AI prompts saved on the permanent web</p>
              </div>
              <div className="mt-4 md:mt-0">
                <select className="bg-background border border-border rounded-md p-2">
                  <option value="recent">Recently Added</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPLORE_PROMPTS.map(prompt => (
                <PromptCard key={prompt.id} {...prompt} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
