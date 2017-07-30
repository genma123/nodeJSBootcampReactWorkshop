# React.js To-Do List Example With REST API for Training #
## With redux-thunk and redux-saga Examples ##

This repository was used (and will most likely be used in future) as part of a series of JavaScript training presentations given in a corporate IT environment.

The background is that an Angular.js example was proposed as a training exercise, which was in turn based on [this video presentation](https://www.youtube.com/watch?v=PFP0oXNNveg&index=22&list=PLuWFibXQR6m75D-X9sBqvBntotbgP_4GE) by Traversy Media. I proposed giving an example of implementing the same thing with React. The goal was to achieve identical functionality using both "frameworks".

To fully understand how this was used, please read the Word document found in the root of the repository.

## redux-thunk example ##
I was asked to give a second presentation and decided I wanted to talk about Redux, but I didn't know at the time how to implement this example so I did something else. [I posted a question to the JavaScript group on LinkedIn](https://www.linkedin.com/comm/groups/121615/121615-6273683704166518784?midToken=AQEug6fZbKuN1Q&trk=eml-b2_anet_digest_of_digests-hero-11-discussion~subject&trkEmail=eml-b2_anet_digest_of_digests-hero-11-discussion~subject-null-a6h0c~j3eq0tsx~nt-null-communities~group~discussion&lipi=urn:li:page:email_b2_anet_digest_of_digests;ZVlzeME1R5qvV5Pjyi0R8Q==) (not sure if this link works for those not subscribed to the group). In response to the huge number of helpful responses I got, I decided to add examples to this repository. The first one uses redux-thunk. I used [this tutorial](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react) as a guide. I then implemented a redux-saga example. This took longer but was more rewarding once I succeeded. Not sure which tutorials to recommend, but [this obvious one](https://github.com/redux-saga/redux-saga-beginner-tutorial) and the [async example on the redux-saga GitHub repository](https://github.com/redux-saga/redux-saga/tree/master/examples/async) are good starting points.

I would like to think that the two Redux examples are self-explanatory, but please post an issue if there's something you don't understand.

I suppose my next step would be to use Axios. I believe that would mostly be a refinement of the redux-sage example.

### Note about error-handling
You may notice these examples lack error-handling. As my original non-Redux example did no error-handling, I decided there was no urgent need to include it in the Redux examples. I apologize to any who might frown on such an omission.

## redux-saga example ##
I have added a redux-saga example. I am using promises, based on [this example](https://github.com/redux-saga/redux-saga/tree/master/examples/async). This barely scratches the surface of what can be done with sagas, but it clearly demonstrates (IMO) the inherent elegance of this approach.
> Written with [StackEdit](https://stackedit.io/).