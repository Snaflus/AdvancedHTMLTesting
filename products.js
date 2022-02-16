const App = Vue.createApp({
    data() {
        return {
            firstName: 'Christopher',
            lastName: 'Harrison',
            imageSource: 'media/Winnie.jpg'            
        };
    }
});
App.mount('#app');

const Patrick = Vue.createApp({
    data() {
        return {
            imageSource: 'media/Patrick.png'            
        };
    }
});
Patrick.mount('#Patrick');

const Centering = Vue.createApp({
    data() {
        return {
            classObject: {
                centered: true,
                active: true
            }
        }
    }
});
Centering.mount('#Centering');