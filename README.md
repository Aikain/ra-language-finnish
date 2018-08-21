# Finnish Messages for React-Admin

Finnish messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

![react-admin demo](http://static.marmelab.com/react-admin/react-admin.mp4)

## Installation

```sh
npm install --save ra-language-finnish
```

## Usage

```js
import finnishMessages from 'ra-language-finnish';

const messages = {
    'fi': finnishMessages,
};

<Admin locale="fi" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
