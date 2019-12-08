# Finnish Messages for React-Admin

Finnish messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save ra-language-finnish
```

## Usage

```js
import finnishMessages from 'ra-language-finnish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => finnishMessages, 'fi');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

You can find more details [here](https://marmelab.com/react-admin/Translation.html).

## License

This translation is licensed under the [MIT License](https://github.com/Aikain/ra-language-finnish/blob/master/LICENSE).