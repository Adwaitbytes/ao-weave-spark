
import { toast } from '@/components/ui/use-toast';

declare global {
  interface Window {
    turbo?: {
      uploadFile: (data: any) => Promise<{ transactionId: string }>;
      getBalance: () => Promise<{ balance: string }>;
    }
  }
}

export const uploadToArweave = async (content: string, metadata: any): Promise<string | null> => {
  if (!window.turbo) {
    toast({
      title: "Turbo SDK not found",
      description: "Please make sure Turbo SDK is loaded properly",
      variant: "destructive"
    });
    return null;
  }

  try {
    // Prepare data for upload
    const data = {
      data: content,
      tags: [
        { name: "Content-Type", value: "text/plain" },
        { name: "App-Name", value: "Spark" },
        { name: "Title", value: metadata.title || "" },
        { name: "Description", value: metadata.description || "" },
        { name: "Category", value: metadata.category || "" },
      ]
    };

    // Upload to Arweave using Turbo
    const result = await window.turbo.uploadFile(data);
    return result.transactionId;
  } catch (error) {
    console.error("Error uploading to Arweave:", error);
    toast({
      title: "Upload failed",
      description: "Failed to upload content to Arweave",
      variant: "destructive"
    });
    return null;
  }
};

export const getArweaveBalance = async (): Promise<string> => {
  if (!window.turbo) {
    return "0";
  }

  try {
    const result = await window.turbo.getBalance();
    return result.balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    return "0";
  }
};

export const getArweaveExplorerLink = (transactionId: string): string => {
  return `https://viewblock.io/arweave/tx/${transactionId}`;
};
