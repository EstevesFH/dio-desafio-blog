import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pxoiatpcfywzhksgsqys.supabase.co/rest/v1',
  headers: { 
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4b2lhdHBjZnl3emhrc2dzcXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDc5MDcsImV4cCI6MjA4NTYyMzkwN30.LQt40FdFgCVaRnWXWQ9NjZeYfwn36CCr_MMC65UF1io",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4b2lhdHBjZnl3emhrc2dzcXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDc5MDcsImV4cCI6MjA4NTYyMzkwN30.LQt40FdFgCVaRnWXWQ9NjZeYfwn36CCr_MMC65UF1io"
  }
});