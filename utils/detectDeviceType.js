export const detectDeviceType = () => {
  if (typeof window === 'undefined') {
    return 'Server';
  }

  const userAgent = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (isIOS) {
    return 'iOS';
  } else if (isAndroid) {
    return 'Android';
  } else {
    return 'Desktop';
  }
};
