import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvmcgmnttlyrgjeyaghw.supabase.co'
const supabaseAnonKey = '
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2bWNnbW50dGx5cmdqZXlhZ2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDc2NjMsImV4cCI6MjA2NjQyMzY2M30.Y893EaZ2BqHqZ68fFH6aeEd7PRKqxbxfvGCiEU1FPnM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)