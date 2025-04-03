
-- Create table for blog comments
CREATE TABLE IF NOT EXISTS public.blog_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to blog_comments" 
  ON public.blog_comments 
  FOR SELECT 
  USING (true);

-- Create policy for authenticated users to insert their comments
CREATE POLICY "Users can insert their own comments" 
  ON public.blog_comments 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create policy for authenticated users to update their comments
CREATE POLICY "Users can update their own comments" 
  ON public.blog_comments 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create policy for authenticated users to delete their comments
CREATE POLICY "Users can delete their own comments" 
  ON public.blog_comments 
  FOR DELETE 
  USING (auth.uid() = user_id);
