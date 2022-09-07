import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const Gallery = () => {
    const items = [
        { // Image Item:
          itemId: 'sample-id',
          mediaUrl: 'https://i.ibb.co/S66b9pd/bucket.jpg',
          metaData: {
            type: 'image',
            height: 200,
            width: 100,
            focalPoint: [0, 0],
          }
        },
        { // Image Item:
            itemId: '2',
            mediaUrl: 'https://i.ibb.co/9VB0ycr/chairs.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '3',
            mediaUrl: 'https://i.ibb.co/cxqZXnW/church.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '4',
            mediaUrl: 'https://i.ibb.co/Wzxspym/churchs.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              title: 'sample-title',
              description: 'sample-description',
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '5',
            mediaUrl: 'https://i.ibb.co/F0BWBPJ/download-2.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              title: 'sample-title',
              description: 'sample-description',
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '6',
            mediaUrl: 'https://i.ibb.co/JxV8Pmr/studio.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '7',
            mediaUrl: 'https://i.ibb.co/0tLm3vq/download-3.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '8',
            mediaUrl: 'https://i.ibb.co/y00SRKk/download-6.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '9',
            mediaUrl: 'https://i.ibb.co/ZcvhGCm/download-8.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,
              focalPoint: [0, 0],

            }
          },
          { // Image Item:
            itemId: '10',
            mediaUrl: 'https://i.ibb.co/1L2k5Pn/download-12.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '11',
            mediaUrl: 'https://i.ibb.co/60Gs0Sk/download-11.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '12',
            mediaUrl: 'https://i.ibb.co/HDg8L3Z/download-13.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '13',
            mediaUrl: 'https://i.ibb.co/k8yb3NW/download-14.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '14',
            mediaUrl: 'https://i.ibb.co/KsRfcrd/download-15.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '15',
            mediaUrl: 'https://i.ibb.co/9GM0hqy/download-17.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '16',
            mediaUrl: 'https://i.ibb.co/L81CvYg/download-19.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '17',
            mediaUrl: 'https://i.ibb.co/tsX1RZb/download-21.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '18',
            mediaUrl: 'https://i.ibb.co/KsRfcrd/download-15.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '19',
            mediaUrl: 'https://i.ibb.co/vY8n0s9/download-24.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '20',
            mediaUrl: 'https://i.ibb.co/XpvK5R6/download-25.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '21',
            mediaUrl: 'https://i.ibb.co/R44rwGN/download-26.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '22',
            mediaUrl: 'https://i.ibb.co/gjZ2sCS/download-27.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '23',
            mediaUrl: 'https://i.ibb.co/t256WTX/download-29.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '24',
            mediaUrl: 'https://i.ibb.co/Ws2Q89g/download-30.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '25',
            mediaUrl: 'https://i.ibb.co/H4H6BFf/download-31.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '26',
            mediaUrl: 'https://i.ibb.co/YBqBCs3/download-33.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '27',
            mediaUrl: 'https://i.ibb.co/BfS9sNr/download-32.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '28',
            mediaUrl: 'https://i.ibb.co/9WmKQwX/download-34.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '29',
            mediaUrl: 'https://i.ibb.co/y00SRKk/download-6.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '30',
            mediaUrl: 'https://i.ibb.co/YBqBCs3/download-33.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '31',
            mediaUrl: 'https://i.ibb.co/mBbYMzd/download-12.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '32',
            mediaUrl: 'https://i.ibb.co/vhkDgsH/download-24.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '33',
            mediaUrl: 'https://i.ibb.co/5Y3VT4f/download-26.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '34',
            mediaUrl: 'https://i.ibb.co/XtVjMW8/download-27.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          },
          { // Image Item:
            itemId: '35',
            mediaUrl: 'https://i.ibb.co/2F5WzxR/download-29.jpg',
            metaData: {
              type: 'image',
              height: 200,
              width: 100,

              focalPoint: [0, 0],
            }
          }
      ]

    // The options of the gallery (from the playground current state)
	const options = {
		galleryLayout: -1,
	};

	// The size of the gallery container. The images will fit themselves in it
	const container = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;

	return (
		<ProGallery
			items={items}
			options={options}
			container={container}
			eventsListener={eventsListener}
			scrollingElement={scrollingElement}
		/>
	);
}
 
export default Gallery;