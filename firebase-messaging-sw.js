importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDT96IjMm8yXIS1gvVXDCVJhRoV5hqsvjA",
  authDomain: "jerseyleague-1d8ce.firebaseapp.com",
  projectId: "jerseyleague-1d8ce",
  storageBucket: "jerseyleague-1d8ce.appspot.com",
  messagingSenderId: "554110961022",
  appId: "1:554110961022:web:512b6fd95822044a99df2f",
  measurementId: "G-X4J9F10108"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});