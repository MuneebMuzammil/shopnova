// // This file is automatically generated. Do not edit it directly.
// import { createClient } from '@supabase/supabase-js';
// import { Database } from './types';

// const SUPABASE_URL = "https://tephmieqnbdqavywxqbb.supabase.co";
// const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcGhtaWVxbmJkcWF2eXd4cWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMDA3MzMsImV4cCI6MjA2Mzc3NjczM30.4StemMf_eEGEo13YF5tmJ9At5y1lZhL998RsBqMixzY";

// // Import the supabase client like this:
// // import { supabase } from "@/integrations/supabase/client";

// const supabase = createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

// export default supabase;









// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import { Database } from './types'; // make sure the path is correct

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export default supabase;
