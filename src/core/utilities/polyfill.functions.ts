export const browserSupportsAllFeatures = (): boolean => {
  return !!(<any> window).Promise &&
    !!(<any> window).Map &&
    !!(<any> window).Set &&
    !!Array.prototype.find &&
    !!(<any> Array.prototype).includes;
};

export const loadScript = (src: string, callback: Function): void => {
  const js = document.createElement('script');
  js.src = src;
  js.onerror = () => new Error(`Failed to load script ${src}`);
  js.onload = () => callback();
  console.log('LOADING SCRIPT', src);
  document.head.appendChild(js);
  
};
