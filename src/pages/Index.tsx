
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { initializeFirebase, loginWithEmail } from '@/lib/firebase';
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [config, setConfig] = useState<FirebaseConfig>({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initializeFirebase(config);
    toast({
      title: "Configuration saved",
      description: "Firebase has been configured successfully.",
    });
    setShowLogin(true);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithEmail(loginData.email, loginData.password);
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate('/admin');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your credentials and try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {!showLogin ? (
        <Card className="w-full max-w-md p-6">
          <h1 className="text-2xl font-bold mb-6">Firebase Configuration</h1>
          <form onSubmit={handleConfigSubmit} className="space-y-4">
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
      ) : (
        <Card className="w-full max-w-md p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <Input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default Index;
