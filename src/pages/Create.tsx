
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundEffects } from '../components/BackgroundEffects';
import { Button } from '@/components/ui/button';
import { useWanderWallet } from '@/hooks/useWanderWallet';
import { Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Create: React.FC = () => {
  const { walletAddress } = useWanderWallet();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!walletAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to create a prompt",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Prompt created!",
        description: "Your prompt has been successfully created and stored on Arweave",
      });
      setIsSubmitting(false);
      setTitle('');
      setDescription('');
      setCategory('');
      setContent('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navbar />
      <main className="pt-24 flex-grow">
        <section className="py-10 px-4 md:px-0">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Create New Prompt</h1>
              <p className="text-muted-foreground">
                Share your AI prompt with the world, stored permanently on Arweave
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Title
                  </label>
                  <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-3 bg-black/30 rounded-md border border-white/10 focus:ring-spark-purple focus:border-spark-purple"
                    placeholder="Enter a descriptive title"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full p-3 bg-black/30 rounded-md border border-white/10 focus:ring-spark-purple focus:border-spark-purple"
                  >
                    <option value="">Select a category</option>
                    <option value="Image Generation">Image Generation</option>
                    <option value="Text">Text</option>
                    <option value="Code">Code</option>
                    <option value="Business">Business</option>
                    <option value="Education">Education</option>
                    <option value="Creative">Creative</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Short Description
                  </label>
                  <input 
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-3 bg-black/30 rounded-md border border-white/10 focus:ring-spark-purple focus:border-spark-purple"
                    placeholder="Brief description of what your prompt does"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Prompt Content
                  </label>
                  <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows={8}
                    className="w-full p-3 bg-black/30 rounded-md border border-white/10 focus:ring-spark-purple focus:border-spark-purple"
                    placeholder="The actual prompt content..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !walletAddress}
                  className="w-full bg-gradient-to-r from-spark-purple to-spark-blue hover:opacity-90 transition-all py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Storing on Arweave...
                    </>
                  ) : (
                    'Create Prompt'
                  )}
                </Button>
                
                {!walletAddress && (
                  <p className="text-center text-sm text-muted-foreground">
                    Connect your wallet to create a prompt
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
