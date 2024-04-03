// Filename: reportWebVitals.js
// Purpose: Function for tracking web vitals and reporting them

const reportWebVitals = onPerfEntry => { // Defining a function to report web vitals
    if (onPerfEntry && onPerfEntry instanceof Function) { // Checking if onPerfEntry is a function
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { // Dynamically importing web-vitals package
        getCLS(onPerfEntry); // Calling getCLS function to report Cumulative Layout Shift (CLS)
        getFID(onPerfEntry); // Calling getFID function to report First Input Delay (FID)
        getFCP(onPerfEntry); // Calling getFCP function to report First Contentful Paint (FCP)
        getLCP(onPerfEntry); // Calling getLCP function to report Largest Contentful Paint (LCP)
        getTTFB(onPerfEntry); // Calling getTTFB function to report Time to First Byte (TTFB)
      });
    }
  };
  
  export default reportWebVitals; // Exporting the reportWebVitals function
  