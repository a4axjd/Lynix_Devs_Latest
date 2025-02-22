
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPost } from "@/types/blog";
import { PortfolioItem } from "@/types/portfolio";
import type { ChangeEvent } from "react";
import { format } from "date-fns";

const Admin = () => {
  const [newBlogPost, setNewBlogPost] = useState<Partial<BlogPost>>({});
  const [newPortfolioItem, setNewPortfolioItem] = useState<Partial<PortfolioItem>>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const { data: blogPosts = [], refetch: refetchBlog } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, "blog"));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date?.toDate() || new Date(),
      })) as BlogPost[];
    },
  });

  const { data: portfolioItems = [], refetch: refetchPortfolio } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
      })) as PortfolioItem[];
    },
  });

  const handleImageUpload = async (file: File) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (selectedImage) {
        imageUrl = await handleImageUpload(selectedImage);
      }

      await addDoc(collection(db, "blog"), {
        ...newBlogPost,
        date: new Date(),
        image: imageUrl,
      });

      setNewBlogPost({});
      setSelectedImage(null);
      refetchBlog();
    } catch (error) {
      console.error("Error adding blog post:", error);
    }
  };

  const handlePortfolioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (selectedImage) {
        imageUrl = await handleImageUpload(selectedImage);
      }

      await addDoc(collection(db, "portfolio"), {
        ...newPortfolioItem,
        createdAt: new Date(),
        image: imageUrl,
      });

      setNewPortfolioItem({});
      setSelectedImage(null);
      refetchPortfolio();
    } catch (error) {
      console.error("Error adding portfolio item:", error);
    }
  };

  const handleDelete = async (collectionName: string, id: string) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      if (collectionName === "blog") {
        refetchBlog();
      } else {
        refetchPortfolio();
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Content Management</h1>

        <Tabs defaultValue="blog">
          <TabsList className="mb-8">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio Items</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add New Blog Post</h2>
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <Input
                  placeholder="Title"
                  value={newBlogPost.title || ""}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
                />
                <Input
                  placeholder="Category"
                  value={newBlogPost.category || ""}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, category: e.target.value })}
                />
                <Input
                  placeholder="Excerpt"
                  value={newBlogPost.excerpt || ""}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, excerpt: e.target.value })}
                />
                <Textarea
                  placeholder="Content"
                  value={newBlogPost.content || ""}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <Button type="submit">Add Blog Post</Button>
              </form>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="p-4">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded mb-4" />
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500">{format(post.date, 'MMMM d, yyyy')}</p>
                  <Button 
                    variant="destructive" 
                    className="mt-4"
                    onClick={() => handleDelete("blog", post.id)}
                  >
                    Delete
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio">
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add New Portfolio Item</h2>
              <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                <Input
                  placeholder="Title"
                  value={newPortfolioItem.title || ""}
                  onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
                />
                <Input
                  placeholder="Category"
                  value={newPortfolioItem.category || ""}
                  onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, category: e.target.value })}
                />
                <Textarea
                  placeholder="Description"
                  value={newPortfolioItem.description || ""}
                  onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <Button type="submit">Add Portfolio Item</Button>
              </form>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <Button 
                    variant="destructive" 
                    className="mt-4"
                    onClick={() => handleDelete("portfolio", item.id)}
                  >
                    Delete
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
