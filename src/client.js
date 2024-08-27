import { createClient } from '@supabase/supabase-js';
const URL = 'https://mnpyklwawxhguhtnhtaa.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucHlrbHdhd3hoZ3VodG5odGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2ODY4ODYsImV4cCI6MjA0MDI2Mjg4Nn0.45ZLN3WTfKCspfY0flNtYnHlwYOh6oMaXFoWW7BVT-0';
export const supabase = createClient(URL, API_KEY);