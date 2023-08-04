import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wydnmkxwstmqfimwilcg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZG5ta3h3c3RtcWZpbXdpbGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNjA2MDYsImV4cCI6MjAwNjczNjYwNn0.e6feoPXwhbtp8vjJFsAI7sVbpRGhMnVDOKA5haDOkQA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
