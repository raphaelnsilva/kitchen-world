'use client'

import { useEffect } from "react";

export const pageview = (GA_MEASUREMENT_ID, url) => {
  useEffect(() => {
    
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  
  }, [GA_MEASUREMENT_ID, url])
};