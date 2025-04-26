
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Heart, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PromptCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    address: string;
  };
  likes: number;
  comments: number;
  previewImage?: string;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  id,
  title,
  description,
  category,
  author,
  likes,
  comments,
  previewImage,
}) => {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-spark-purple/5 transition-all duration-300 h-full">
      {previewImage && (
        <div className="w-full h-44 overflow-hidden">
          <img 
            src={previewImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      <CardContent className={`p-5 ${!previewImage ? 'pt-5' : ''}`}>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="bg-secondary/50 text-xs">
            {category}
          </Badge>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <div className="flex items-center">
              <Heart size={14} className="mr-1" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare size={14} className="mr-1" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-border/30 mt-auto">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 border border-border">
            <img src={author.avatar} alt={author.name} />
          </Avatar>
          <div className="text-sm font-medium">{author.name}</div>
        </div>
      </CardFooter>
    </Card>
  );
};
