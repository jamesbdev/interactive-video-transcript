## Treehouse Code Adventures: An Interactive Video Transcript

An interactive video transcript designed to enhance the viewer's experience by allowing them to interact with the content. Utilizing HTML, CSS, and JavaScript, developers are required to create a seamless interface that will integrate the transcript with the video playback.

#### Font Family: [Inter](https://fonts.google.com/specimen/Inter)

#### External Resources:

https://www.mediaelementjs.com/


#### How to succeed

1. Implement the `MediaElement.js` framework, a custom video player, or another video player library.

2. Include, at minimum, the following features: play, pause, full-screen toggle, volume controls, and a progress bar.

3. Ensure the video and all features work in at least three browsers.

4. Copy and paste the text from the captions.vtt file as a code comment block into your index.html file. 

5. Use `<span>` tags for each section of text from the captions.vtt file, and wrap all
those `<span>` tags inside of a pair of `<p>` tags that can act as a container.

6. Add a `data-start` and `data-end` attribute to each span tag.

7. Now, you can use the timestamps from the `captions.vtt` file for the values of
the `data-start` and `data-end` attributes.

8. You’ll be using JavaScript to reference these numbers, so the formatting needs to be changed.  Things like colons or unnecessary leading zeros should be removed. For example, the first timestamp in the captions.vtt file looks like this: `00:00:00.002 --> 00:00:03.157`. With that example, your first span element would have these data attributes: `<span data-start="0.002" data-end="3.157">`.

9. As the media playback time changes, sentences (individual spans) in the transcript should be highlighted. Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.


Extra Challenges:

1. The video skips to the proper place in the video when a span is clicked.

2. Add a color theme or other customizations to the video player's control icons.
