import { createClient } from '@supabase/supabase-js';
const URL = 'https://ladtepbqcnmsbtnvxtlv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZHRlcGJxY25tc2J0bnZ4dGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNTg2MjQsImV4cCI6MjAzOTkzNDYyNH0.TQE3pQK5BVALMyiL9Mlb6MJ33K7fhXFsx_e-JanEgPQ';

export const supabase = createClient(URL, API_KEY);