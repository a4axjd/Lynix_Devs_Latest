
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { initializeFirebase } from '@/lib/firebase';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const Index = () => {
  const [config, setConfig] = useState<FirebaseConfig>({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initializeFirebase(config);
    window.location.reload(); // Reload to apply new config
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6">Firebase Configuration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">API Key</label>
            <Input
              value={config.apiKey}
              onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
              placeholder="Enter API Key"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Auth Domain</label>
            <Input
              value={config.authDomain}
              onChange={(e) => setConfig({ ...config, authDomain: e.target.value })}
              placeholder="Enter Auth Domain"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Project ID</label>
            <Input
              value={config.projectId}
              onChange={(e) => setConfig({ ...config, projectId: e.target.value })}
              placeholder="Enter Project ID"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Storage Bucket</label>
            <Input
              value={config.storageBucket}
              onChange={(e) => setConfig({ ...config, storageBucket: e.target.value })}
              placeholder="Enter Storage Bucket"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Messaging Sender ID</label>
            <Input
              value={config.messagingSenderId}
              onChange={(e) => setConfig({ ...config, messagingSenderId: e.target.value })}
              placeholder="Enter Messaging Sender ID"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">App ID</label>
            <Input
              value={config.appId}
              onChange={(e) => setConfig({ ...config, appId: e.target.value })}
              placeholder="Enter App ID"
            />
          </div>
          <Button type="submit" className="w-full">Save Configuration</Button>
        </form>
      </Card>
    </div>
  );
};

export default Index;
