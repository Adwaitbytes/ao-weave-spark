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
    console.error("Turbo SDK not found");
    toast({
      title: "Turbo SDK not found",
      description: "Please make sure Turbo SDK is loaded properly",
      variant: "destructive"
    });
    return null;
  }

  try {
    console.log("Preparing data for Arweave upload:", { content: content.substring(0, 50) + "...", metadata });
    
    // Prepare data for upload
    const data = {
      data: content,
      tags: [
        { name: "Content-Type", value: "text/plain" },
        { name: "App-Name", value: "Spark" },
        { name: "Title", value: metadata.title || "" },
        { name: "Description", value: metadata.description || "" },
        { name: "Category", value: metadata.category || "" },
        { name: "Creator", value: metadata.creator || "" },
        { name: "Timestamp", value: metadata.timestamp || new Date().toISOString() },
      ]
    };

    console.log("Starting upload to Arweave using Turbo...");
    
    // Upload to Arweave using Turbo
    const result = await window.turbo.uploadFile(data);
    console.log("Upload successful, transaction ID:", result.transactionId);
    
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
    console.error("Turbo SDK not found for balance check");
    return "0";
  }

  try {
    console.log("Getting Arweave balance...");
    const result = await window.turbo.getBalance();
    console.log("Balance result:", result);
    return result.balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    return "0";
  }
};

export const getArweaveExplorerLink = (transactionId: string): string => {
  return `https://viewblock.io/arweave/tx/${transactionId}`;
};
