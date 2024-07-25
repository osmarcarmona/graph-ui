# Text to Network (React)

> If you are using VSCode, you can render the markdown of this file with the command:
>
> `> Markdown: Open Preview to the Side`

> You can find project setup commands at the bottom of this README.

## Interview Questions

> This section is identical with the one in the root README file.

In this exercise, we will explore the visualisation of disease-to-gene relationships found in scientific literature.

The information which you will visualise has been produced by our internal NLP (natural language processing) pipeline, which can extract biological entities and their relationships from a given scientific article.

In your previous interview, you will have seen the following annotated sentence from a scientific article:

```html
<sentence data-id="bai-sentence-1">
  Quantitative Western blot analyses demonstrate that the total level of
  <gene data-uuid="bai-entity-sod1">SOD1</gene> isoforms
  <relationship> is increased in</relationship> in both
  <disease data-uuid="bai-entity-alzd"> Alzheimer </disease> and
  <disease data-uuid="bai-entity-parkd"> Parkinson</disease>.
</sentence>
```

Which you parsed into the JSON format:

```json
{
  "nodes": [
    { "id": "bai-entity-sod1", "label": "SOD1" },
    { "id": "bai-entity-alzd", "label": "Alzheimer" },
    { "id": "bai-entity-parkd", "label": "Parkinson" }
  ],
  "relationships": [
    {
      "source": "bai-entity-sod1",
      "target": "bai-entity-alzd",
      "label": "is increased in"
    },
    {
      "source": "bai-entity-sod1",
      "target": "bai-entity-parkd",
      "label": "is increased in"
    }
  ]
}
```

We will now try to visualise the data you have parsed.

## Question 1

We have provided you with the original sentence data again and a corresponding parsed data set. These can be found in `./src/data` of your project.

Your task is to now render this data into the following graphical network representation:

![Exercise output](../frontend_text_2_network_text2network__output.png)

Can you split the screen into half to display all the raw sentences on one side and the network on the other side?

For the network representation, we recommend you use the library [Cytoscape JS](https://js.cytoscape.org/). We have set up a skeleton application with Cytoscape for you to use, with an example network already implemented. Please feel free to use the Cytoscape documentation provided in the helpful links section below.

## Question 2

A drug discoverer comments that it would be great to highlight the relevant sentence evidence when interacting with your network.

In order to do this, we would like to implement a hover effect. When the user hovers over a edge in the network, we would like both the edge and the corresponding sentence to be higlighted together. See the gif below for an example implementation:

![Text to network hover](../network_hover_example.gif)

## Extension questions

- How would you implement a hover effect for the **nodes** in the network? i.e. when you hover over a node, highlight the corresponding entities within the text.
- How would you test your implementation?

## Helpful links

- DOMParser: [https://developer.mozilla.org/en-US/docs/Web/API/DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- Cytoscape: [https://js.cytoscape.org/](https://js.cytoscape.org/)

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
